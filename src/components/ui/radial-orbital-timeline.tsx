"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  
  // High-performance rotation refs
  const rotationAngleRef = useRef<number>(0);
  const requestRef = useRef<number>(0);
  const autoRotateRef = useRef<boolean>(true);
  const viewModeRef = useRef<"orbital">("orbital");
  const expandedItemsRef = useRef<Record<number, boolean>>({});

  useEffect(() => {
    autoRotateRef.current = autoRotate;
    viewModeRef.current = viewMode;
    expandedItemsRef.current = expandedItems;
  }, [autoRotate, viewMode, expandedItems]);

  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = 0;
      }

      return undefined;
    }

    const updateNodes = () => {
      if (viewModeRef.current !== "orbital") return;
      
      if (autoRotateRef.current) {
        rotationAngleRef.current = (rotationAngleRef.current + 0.15) % 360;
      }

      const total = timelineData.length;
      timelineData.forEach((item, index) => {
        const domNode = nodeRefs.current[item.id];
        if (!domNode) return;

        const angle = ((index / total) * 360 + rotationAngleRef.current) % 360;
        const radius = 200;
        const radian = (angle * Math.PI) / 180;

        const x = radius * Math.cos(radian) + centerOffset.x;
        const y = radius * Math.sin(radian) + centerOffset.y;
        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

        const isExpanded = expandedItemsRef.current[item.id];
        
        domNode.style.transform = `translate(${x}px, ${y}px)`;
        domNode.style.zIndex = isExpanded ? "200" : zIndex.toString();
        domNode.style.opacity = isExpanded ? "1" : opacity.toString();
      });

      requestRef.current = requestAnimationFrame(updateNodes);
    };

    requestRef.current = requestAnimationFrame(updateNodes);
    return () => cancelAnimationFrame(requestRef.current);
  }, [timelineData, centerOffset, isVisible]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    // Smooth easing could be added here in the future
    rotationAngleRef.current = 270 - targetAngle;
  };

  // Removed explicit calculateNodePosition as calculation sits directly in the frame loop now

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>

          {timelineData.map((item, index) => {
            const angle = ((index / timelineData.length) * 360 + rotationAngleRef.current) % 360;
            const radius = 200;
            const radian = (angle * Math.PI) / 180;
            
            const initialX = radius * Math.cos(radian) + centerOffset.x;
            const initialY = radius * Math.sin(radian) + centerOffset.y;
            const initialZIndex = Math.round(100 + 50 * Math.cos(radian));
            const initialOpacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${initialX}px, ${initialY}px)`,
              zIndex: isExpanded ? 200 : initialZIndex,
              opacity: isExpanded ? 1 : initialOpacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-colors cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""
                    }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${isExpanded
                      ? "bg-white text-black"
                      : isRelated
                        ? "bg-white/50 text-black"
                        : "bg-black text-white"
                    }
                  border-2 
                  ${isExpanded
                      ? "border-white shadow-lg shadow-white/30"
                      : isRelated
                        ? "border-white animate-pulse"
                        : "border-white/40"
                    }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={16} />
                </div>

                <div
                  className={`
                  absolute top-12  whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125" : "text-white/70"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 bg-[#020617ee] border border-blue-500/30 overflow-hidden text-left z-50 transform origin-top animate-in fade-in zoom-in-95 duration-300"
                    style={{
                      width: '320px',
                      top: '90px',
                      borderRadius: '16px',
                      boxShadow: '0 30px 80px -15px rgba(0,0,0,0.9), 0 0 40px rgba(56,189,248,0.2)',
                      backdropFilter: 'blur(24px)'
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80"></div>
                    
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {/* Header */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span 
                            style={{
                              padding: '4px 10px',
                              borderRadius: '999px',
                              fontSize: '11px',
                              fontWeight: 'bold',
                              letterSpacing: '1px',
                              textTransform: 'uppercase',
                              border: '1px solid',
                              backgroundColor: item.status === 'completed' ? 'rgba(20, 184, 166, 0.2)' : item.status === 'in-progress' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(100, 116, 139, 0.2)',
                              borderColor: item.status === 'completed' ? 'rgba(20, 184, 166, 0.4)' : item.status === 'in-progress' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.1)',
                              color: item.status === 'completed' ? '#5eead4' : item.status === 'in-progress' ? '#93c5fd' : '#cbd5e1'
                            }}
                          >
                            {item.status.replace('-', ' ')}
                          </span>
                          <span style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '1px', color: '#94a3b8', textTransform: 'uppercase' }}>
                            {item.date}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: '4px 0 0 0', lineHeight: '1.2' }}>
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Content */}
                      <div style={{ fontSize: '13.5px', color: 'rgba(203, 213, 225, 0.9)', lineHeight: '1.6', fontWeight: '300' }}>
                        <p style={{ margin: 0 }}>{item.content}</p>
                      </div>

                      {/* Energy Bar */}
                      <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2dd4bf' }}>
                            <Zap size={14} />
                            Energy Level
                          </span>
                          <span style={{ fontFamily: 'monospace', color: '#5eead4' }}>{item.energy}%</span>
                        </div>
                        <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(30, 41, 59, 0.8)', borderRadius: '999px', overflow: 'hidden' }}>
                          <div
                            style={{ 
                              height: '100%', 
                              width: `${item.energy}%`,
                              background: 'linear-gradient(to right, #3b82f6, #2dd4bf, #34d399)',
                              position: 'relative'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Related Nodes */}
                      {item.relatedIds.length > 0 && (
                        <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Link size={12} color="#60a5fa" />
                            <h4 style={{ margin: 0, fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px', color: '#94a3b8' }}>
                              Connected Nodes
                            </h4>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <button
                                  key={relatedId}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    height: '28px',
                                    padding: '0 12px',
                                    fontSize: '11px',
                                    fontWeight: '500',
                                    borderRadius: '999px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    color: '#cbd5e1',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease'
                                  }}
                                  onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
                                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                                    e.currentTarget.style.color = 'white';
                                  }}
                                  onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.color = '#cbd5e1';
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={10} style={{ opacity: 0.7 }} />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
