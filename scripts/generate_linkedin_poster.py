from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src" / "assets"
OUTPUT = ROOT / "public" / "linkedin_poster_driewing.png"

WIDTH = 1080
HEIGHT = 1350
RESAMPLING = getattr(Image, "Resampling", Image)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def draw_round_rect(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def add_vertical_gradient(canvas: Image.Image, top_color, bottom_color):
    gradient = Image.new("RGBA", (1, HEIGHT))
    pixels = []
    for y in range(HEIGHT):
        t = y / (HEIGHT - 1)
        pixels.append(
            tuple(
                int(top_color[i] * (1 - t) + bottom_color[i] * t)
                for i in range(4)
            )
        )
    gradient.putdata(pixels)
    gradient = gradient.resize((WIDTH, HEIGHT))
    canvas.alpha_composite(gradient)


def add_soft_glow(layer: Image.Image, center, size, color, blur=120):
    glow = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    x, y = center
    w, h = size
    glow_draw.ellipse((x - w // 2, y - h // 2, x + w // 2, y + h // 2), fill=color)
    glow = glow.filter(ImageFilter.GaussianBlur(blur))
    layer.alpha_composite(glow)


def add_grid(draw: ImageDraw.ImageDraw):
    line = (80, 140, 220, 24)
    for x in range(0, WIDTH, 60):
        draw.line((x, 0, x, HEIGHT), fill=line, width=1)
    for y in range(0, HEIGHT, 60):
        draw.line((0, y, WIDTH, y), fill=line, width=1)


def add_chips(draw, start_x, start_y, labels, font):
    x = start_x
    y = start_y
    for label in labels:
        bbox = draw.textbbox((0, 0), label, font=font)
        chip_w = bbox[2] - bbox[0] + 36
        chip_h = 42
        if x + chip_w > 560:
            x = start_x
            y += chip_h + 14
        draw_round_rect(
            draw,
            (x, y, x + chip_w, y + chip_h),
            radius=21,
            fill=(255, 255, 255, 20),
            outline=(120, 235, 255, 80),
            width=2,
        )
        draw.text((x + 18, y + 10), label, font=font, fill=(220, 242, 255, 255))
        x += chip_w + 14


def fit_image(image: Image.Image, size):
    copy = image.copy()
    copy.thumbnail(size, RESAMPLING.LANCZOS)
    return copy


def main():
    canvas = Image.new("RGBA", (WIDTH, HEIGHT), (4, 10, 24, 255))
    add_vertical_gradient(canvas, (6, 14, 32, 255), (5, 8, 20, 255))
    add_soft_glow(canvas, (210, 180), (460, 460), (0, 225, 255, 90), blur=130)
    add_soft_glow(canvas, (865, 420), (500, 500), (132, 73, 255, 82), blur=145)
    add_soft_glow(canvas, (730, 1090), (600, 350), (0, 225, 255, 50), blur=160)

    draw = ImageDraw.Draw(canvas)
    add_grid(draw)

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)

    panel_box = (56, 56, WIDTH - 56, HEIGHT - 56)
    draw_round_rect(
        overlay_draw,
        panel_box,
        radius=42,
        fill=(8, 15, 33, 188),
        outline=(95, 225, 255, 70),
        width=2,
    )

    hero_card = (578, 168, 978, 690)
    draw_round_rect(
        overlay_draw,
        hero_card,
        radius=34,
        fill=(10, 18, 38, 225),
        outline=(156, 115, 255, 95),
        width=2,
    )

    bottom_card = (580, 750, 978, 1165)
    draw_round_rect(
        overlay_draw,
        bottom_card,
        radius=30,
        fill=(8, 18, 38, 195),
        outline=(88, 210, 255, 70),
        width=2,
    )

    canvas.alpha_composite(overlay)

    logo = Image.open(ASSETS / "brand_logo.png").convert("RGBA")
    hero = Image.open(ASSETS / "hero-agency.png").convert("RGBA")

    logo = fit_image(logo, (132, 132))
    canvas.alpha_composite(logo, (86, 82))

    hero_fitted = fit_image(hero, (360, 450))
    hero_bg = Image.new("RGBA", (360, 450), (0, 0, 0, 0))
    hero_bg.alpha_composite(
        hero_fitted,
        ((360 - hero_fitted.width) // 2, (450 - hero_fitted.height) // 2),
    )
    rounded_mask = Image.new("L", (360, 450), 0)
    ImageDraw.Draw(rounded_mask).rounded_rectangle((0, 0, 359, 449), radius=28, fill=255)
    hero_bg.putalpha(rounded_mask)
    canvas.alpha_composite(hero_bg, (598, 188))

    title_font = load_font(82, bold=True)
    subtitle_font = load_font(34, bold=False)
    body_font = load_font(24, bold=False)
    small_bold = load_font(24, bold=True)
    chip_font = load_font(21, bold=False)
    tag_font = load_font(22, bold=True)

    draw.text((236, 96), "DRIEWING", font=load_font(36, bold=True), fill=(214, 245, 255, 255))
    draw.text((80, 250), "Design.", font=title_font, fill=(255, 255, 255, 255))
    draw.text((80, 350), "Build.", font=title_font, fill=(126, 236, 255, 255))
    draw.text((80, 450), "Launch.", font=title_font, fill=(195, 148, 255, 255))

    subtitle = "Digital products clients remember."
    draw.text((84, 580), subtitle, font=subtitle_font, fill=(225, 238, 255, 255))

    body = (
        "Premium websites, mobile apps, SaaS platforms,\n"
        "and UI/UX systems for startups and growing brands."
    )
    draw.multiline_text(
        (84, 650),
        body,
        font=body_font,
        fill=(188, 205, 226, 255),
        spacing=10,
    )

    add_chips(
        draw,
        84,
        780,
        ["Web Platforms", "Mobile Apps", "UI/UX Systems", "Launch Support"],
        chip_font,
    )

    draw.text((608, 778), "Why brands choose us", font=tag_font, fill=(126, 236, 255, 255))
    bullets = [
        "Fast communication",
        "Premium execution",
        "Founder-friendly delivery",
        "Built for performance and trust",
    ]
    y = 838
    for bullet in bullets:
      draw.rounded_rectangle((608, y + 9, 626, y + 27), radius=9, fill=(0, 240, 255, 255))
      draw.text((646, y), bullet, font=body_font, fill=(232, 242, 255, 255))
      y += 72

    cta_box = (84, 1108, 434, 1210)
    draw_round_rect(draw, cta_box, radius=28, fill=(0, 228, 255, 32), outline=(0, 240, 255, 120), width=2)
    draw.text((110, 1134), "driewing.vercel.app", font=small_bold, fill=(235, 249, 255, 255))
    draw.text((110, 1168), "Web, mobile and SEO-ready execution", font=load_font(18, bold=False), fill=(165, 198, 220, 255))

    footer = "Web Platforms  •  Mobile Apps  •  SaaS Delivery  •  Premium UI/UX"
    bbox = draw.textbbox((0, 0), footer, font=load_font(18, bold=False))
    footer_x = (WIDTH - (bbox[2] - bbox[0])) // 2
    draw.text((footer_x, 1272), footer, font=load_font(18, bold=False), fill=(120, 150, 180, 255))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUTPUT, quality=95)
    print(OUTPUT)


if __name__ == "__main__":
    main()
