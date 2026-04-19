from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src" / "assets"
OUTPUT = ROOT / "public" / "driewing_linkedin_post.png"
WIDTH = 1080
HEIGHT = 1350
RESAMPLING = getattr(Image, "Resampling", Image)


def font(size, bold=False):
    choices = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ]
    for item in choices:
        path = Path(item)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def rounded(draw, box, radius, fill, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def fit(image, size):
    image = image.copy()
    image.thumbnail(size, RESAMPLING.LANCZOS)
    return image


def glow(canvas, x, y, w, h, color, blur):
    layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse((x, y, x + w, y + h), fill=color)
    canvas.alpha_composite(layer.filter(ImageFilter.GaussianBlur(blur)))


def multiline_height(draw, text, use_font, spacing=0):
    box = draw.multiline_textbbox((0, 0), text, font=use_font, spacing=spacing)
    return box[3] - box[1]


def main():
    canvas = Image.new("RGBA", (WIDTH, HEIGHT), (5, 10, 24, 255))
    draw = ImageDraw.Draw(canvas)

    for y in range(HEIGHT):
        t = y / (HEIGHT - 1)
        r = int(7 * (1 - t) + 3 * t)
        g = int(16 * (1 - t) + 11 * t)
        b = int(38 * (1 - t) + 28 * t)
        draw.line((0, y, WIDTH, y), fill=(r, g, b, 255))

    glow(canvas, -120, -60, 520, 520, (0, 235, 255, 80), 130)
    glow(canvas, 680, 40, 360, 360, (162, 94, 255, 90), 115)
    glow(canvas, 640, 900, 420, 300, (0, 235, 255, 55), 120)

    grid = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, WIDTH, 54):
        gd.line((x, 0, x, HEIGHT), fill=(90, 170, 255, 28), width=1)
    for y in range(0, HEIGHT, 54):
        gd.line((0, y, WIDTH, y), fill=(90, 170, 255, 28), width=1)
    canvas.alpha_composite(grid)

    panel = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    pd = ImageDraw.Draw(panel)
    rounded(pd, (42, 42, WIDTH - 42, HEIGHT - 42), 40, (8, 14, 32, 210), (110, 235, 255, 70), 2)
    rounded(pd, (590, 112, 970, 640), 32, (10, 20, 44, 215), (165, 120, 255, 100), 2)
    rounded(pd, (590, 700, 970, 1145), 30, (9, 18, 40, 180), (88, 220, 255, 70), 2)
    canvas.alpha_composite(panel)

    hero = Image.open(ASSETS / "hero-agency.png").convert("RGBA")
    hero = fit(hero, (340, 470))
    hero_card = Image.new("RGBA", (340, 470), (0, 0, 0, 0))
    hero_card.alpha_composite(hero, ((340 - hero.width) // 2, (470 - hero.height) // 2))
    mask = Image.new("L", (340, 470), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, 339, 469), radius=28, fill=255)
    hero_card.putalpha(mask)
    canvas.alpha_composite(hero_card, (610, 140))

    logo = Image.open(ASSETS / "brand_logo.png").convert("RGBA")
    logo = fit(logo, (120, 120))
    canvas.alpha_composite(logo, (74, 76))

    d = ImageDraw.Draw(canvas)
    title_big = font(84, bold=True)
    title_small = font(70, bold=True)
    sub = font(28, bold=False)
    body = font(24, bold=False)
    tiny = font(20, bold=False)
    tiny_bold = font(24, bold=True)
    brand = font(38, bold=True)

    d.text((210, 96), "DRIEWING", font=brand, fill=(226, 244, 255, 255))
    d.text((76, 238), "We Build", font=title_big, fill=(255, 255, 255, 255))
    d.text((76, 336), "Digital Products", font=title_small, fill=(113, 234, 255, 255))
    d.text((76, 426), "That Feel Premium", font=title_small, fill=(193, 145, 255, 255))

    lead = "Web platforms, mobile apps, SaaS systems,\nand launch-ready UI/UX for ambitious brands."
    d.multiline_text((82, 560), lead, font=sub, fill=(205, 218, 234, 255), spacing=10)

    tags = ["Web Platforms", "Mobile Apps", "SaaS Delivery", "UI/UX Systems"]
    x, y = 80, 708
    for tag in tags:
        box = d.textbbox((0, 0), tag, font=tiny)
        w = box[2] - box[0] + 34
        rounded(d, (x, y, x + w, y + 42), 21, (255, 255, 255, 24), (105, 238, 255, 100), 2)
        d.text((x + 17, y + 10), tag, font=tiny, fill=(229, 243, 255, 255))
        x += w + 14
        if x > 500:
            x = 80
            y += 56

    d.text((616, 730), "Why Driewing", font=tiny_bold, fill=(112, 236, 255, 255))
    points = [
        "Fast communication",
        "Premium visual execution",
        "Performance-focused builds",
        "Launch support from day one",
    ]
    py = 798
    for point in points:
        d.ellipse((618, py + 8, 636, py + 26), fill=(0, 235, 255, 255))
        d.text((654, py), point, font=body, fill=(232, 240, 250, 255))
        py += 74

    rounded(d, (80, 1098, 470, 1200), 30, (0, 231, 255, 42), (0, 235, 255, 120), 2)
    d.text((108, 1125), "driewing.vercel.app", font=tiny_bold, fill=(239, 248, 255, 255))
    d.text((108, 1160), "Built for trust, speed, and first impressions", font=tiny, fill=(164, 192, 214, 255))

    footer = "Design  •  Build  •  Launch"
    box = d.textbbox((0, 0), footer, font=tiny_bold)
    d.text(((WIDTH - (box[2] - box[0])) // 2, 1270), footer, font=tiny_bold, fill=(118, 150, 182, 255))

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUTPUT, quality=95)
    print(OUTPUT)


if __name__ == "__main__":
    main()
