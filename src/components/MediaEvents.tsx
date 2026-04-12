import { useState } from "react";

interface Photo     { id: number; img: string; link: string; }
interface MediaItem { id: number; paper: string; color: string; img: string; link: string; }
interface VideoItem { id: number; title: string; platform: string; url: string; icon: string; color: string; }

const eventPhotos: Photo[] = [
  { id:1,  img:"https://i.ibb.co/gM1cGRWd/038A7956.jpg",                                link:"https://ibb.co/kgnPpSDJ" },
  { id:2,  img:"https://i.ibb.co/chM3GyVT/038A7993.jpg",                                link:"https://ibb.co/5ht4N1wc" },
  { id:3,  img:"https://i.ibb.co/WptjKcY8/038A8021.jpg",                                link:"https://ibb.co/sJHz3FMx" },
  { id:4,  img:"https://i.ibb.co/nNTX90QM/038A8025.jpg",                                link:"https://ibb.co/W4QrZ3Bv" },
  { id:5,  img:"https://i.ibb.co/tM3RZcK0/038A8047.jpg",                                link:"https://ibb.co/N67R1pC0" },
  { id:6,  img:"https://i.ibb.co/kVY3X3P3/038A8101.jpg",                                link:"https://ibb.co/8nFz9zQz" },
  { id:7,  img:"https://i.ibb.co/sdb5X6bM/038A8120.jpg",                                link:"https://ibb.co/tTQZ1xQW" },
  { id:8,  img:"https://i.ibb.co/gMm4575L/038A8327.jpg",                                link:"https://ibb.co/kg5mRyRs" },
  { id:9,  img:"https://i.ibb.co/KxDn6wWK/Whats-App-Image-2026-04-12-at-13-54-41.jpg", link:"https://ibb.co/m50pJ84N" },
  { id:10, img:"https://i.ibb.co/Ps5dfVQQ/038A8417.jpg",                                link:"https://ibb.co/CpnfTS22" },
  { id:11, img:"https://i.ibb.co/nM3LV9L3/Whats-App-Image-2026-04-12-at-13-54-42.jpg", link:"https://ibb.co/fd8xKfx8" },
  { id:12, img:"https://i.ibb.co/bgtMzFC4/Whats-App-Image-2026-04-12-at-13-54-43.jpg", link:"https://ibb.co/Y7gFpX15" },
  { id:13, img:"https://i.ibb.co/0Rfxp8CC/Whats-App-Image-2026-04-12-at-13-54-44.jpg", link:"https://ibb.co/674kcVHH" },
  { id:14, img:"https://i.ibb.co/p6HyBZ1r/Whats-App-Image-2026-04-12-at-13-54-45.jpg", link:"https://ibb.co/SDkr4067" },
  { id:15, img:"https://i.ibb.co/Z117FT3M/Whats-App-Image-2026-04-12-at-13-54-46-1.jpg",link:"https://ibb.co/gFFhfgGR" },
  { id:16, img:"https://i.ibb.co/DD15GYZm/Whats-App-Image-2026-04-12-at-13-54-46.jpg",  link:"https://ibb.co/TBwmK1sJ" },
  { id:17, img:"https://i.ibb.co/MyVvf63Y/Whats-App-Image-2026-04-12-at-13-54-47-1.jpg",link:"https://ibb.co/vCPFhYK7" },
  { id:18, img:"https://i.ibb.co/YTZ2FHXV/Whats-App-Image-2026-04-12-at-13-54-47.jpg",  link:"https://ibb.co/n8CrNxBK" },
  { id:19, img:"https://i.ibb.co/PZF4b4rs/Whats-App-Image-2026-04-12-at-13-54-48-1.jpg",link:"https://ibb.co/LzY6q60D" },
  { id:20, img:"https://i.ibb.co/27HzhtTY/Whats-App-Image-2026-04-12-at-13-54-48.jpg",  link:"https://ibb.co/GvNZp2q3" },
  { id:21, img:"https://i.ibb.co/NhsNNL8/Whats-App-Image-2026-04-12-at-13-54-49.jpg",   link:"https://ibb.co/MTs11RY"  },
  { id:22, img:"https://i.ibb.co/4wqLYDPp/Whats-App-Image-2026-04-12-at-13-54-50-1.jpg", link:"https://ibb.co/hx6NZnDV" },
  { id:23, img:"https://i.ibb.co/FLrDh10K/Whats-App-Image-2026-04-12-at-13-54-51-1.jpg", link:"https://ibb.co/fzgxXWn2" },
  { id:24, img:"https://i.ibb.co/DD8zkPJ4/Whats-App-Image-2026-04-12-at-13-54-51.jpg",   link:"https://ibb.co/7JRjVxfv" },
];

const mediaClips: MediaItem[] = [
  { id:1,  paper:"Dainik Bhaskar",       color:"#E53935", link:"https://ibb.co/qMNzKjm2", img:"https://i.ibb.co/Rp31fbQJ/Whats-App-Image-2026-03-29-at-09-14-54.jpg" },
  { id:2,  paper:"Rajasthan Patrika",    color:"#1565C0", link:"https://ibb.co/9HXfXq45", img:"https://i.ibb.co/232L2jM4/Whats-App-Image-2026-03-29-at-09-14-55.jpg" },
  { id:3,  paper:"Punjab Kesari",        color:"#F57F17", link:"https://ibb.co/rRPQMXBj", img:"https://i.ibb.co/LXw06sTF/Whats-App-Image-2026-03-29-at-09-23-40.jpg" },
  { id:4,  paper:"Dainik Navjyoti",      color:"#2E7D32", link:"https://ibb.co/Kn6v2M9",  img:"https://i.ibb.co/Gm7SWKV/Whats-App-Image-2026-03-29-at-09-24-37.jpg"  },
  { id:5,  paper:"Rashtradoot",          color:"#6A1B9A", link:"https://ibb.co/5xLz0gzd", img:"https://i.ibb.co/h1Vn6Jnk/Whats-App-Image-2026-03-29-at-09-25-40.jpg" },
  { id:6,  paper:"Morning News",         color:"#00838F", link:"https://ibb.co/v4CwNRRF", img:"https://i.ibb.co/pj60H557/Whats-App-Image-2026-03-29-at-09-28-10.jpg" },
  { id:7,  paper:"Business Remedies",    color:"#00796B", link:"https://ibb.co/FbhCYkrg", img:"https://i.ibb.co/ynN7km9W/Whats-App-Image-2026-03-29-at-09-30-58.jpg" },
  { id:8,  paper:"Satta Jagat",          color:"#C62828", link:"https://ibb.co/JwNbnmDP", img:"https://i.ibb.co/9kJfncQj/Whats-App-Image-2026-03-29-at-09-31-32.jpg" },
  { id:9,  paper:"Kamyab Kalam",         color:"#4527A0", link:"https://ibb.co/c7SP54b",  img:"https://i.ibb.co/n5NT2x3/Whats-App-Image-2026-03-29-at-09-32-43.jpg"  },
  { id:10, paper:"Mridul Patrika",       color:"#BF360C", link:"https://ibb.co/Txk891xT", img:"https://i.ibb.co/W46ym043/Whats-App-Image-2026-03-29-at-09-33-09.jpg" },
  { id:11, paper:"Dainik Tasdeek",       color:"#37474F", link:"https://ibb.co/F4y58CDS", img:"https://i.ibb.co/pjMf45Lt/Whats-App-Image-2026-03-29-at-09-33-44.jpg" },
  { id:12, paper:"Sach Bedhrak",         color:"#1B5E20", link:"https://ibb.co/5xnCyXB2", img:"https://i.ibb.co/2YsRQ0g5/Whats-App-Image-2026-03-29-at-09-37-14.jpg" },
  { id:13, paper:"Mahanagar Times",      color:"#880E4F", link:"https://ibb.co/zVtRXzpb", img:"https://i.ibb.co/wh2WSfVC/Whats-App-Image-2026-03-29-at-09-37-15.jpg" },
  { id:14, paper:"Hindustan Express",    color:"#0277BD", link:"https://ibb.co/shgZHGK",  img:"https://i.ibb.co/Z3f0mPB/Whats-App-Image-2026-03-29-at-09-38-33.jpg"  },
  { id:15, paper:"Samachaar Jagat",      color:"#558B2F", link:"https://ibb.co/ccPBZJS1", img:"https://i.ibb.co/zh1MBsTr/Whats-App-Image-2026-03-29-at-09-40-45-1.jpg"},
  { id:16, paper:"Dainik Bhaskar (City)",color:"#E53935", link:"https://ibb.co/d4Vhsj8p", img:"https://i.ibb.co/MktXyZF1/Whats-App-Image-2026-03-29-at-09-40-45.jpg" },
  { id:17, paper:"Hello Rajasthan",      color:"#AD1457", link:"https://ibb.co/zV8rrT21", img:"https://i.ibb.co/DfGttHMN/Whats-App-Image-2026-03-29-at-09-42-09.jpg" },
  { id:18, paper:"Khas Khabar",          color:"#00695C", link:"https://ibb.co/84Syp0zY", img:"https://i.ibb.co/6JfKxmvX/Whats-App-Image-2026-03-29-at-11-04-05.jpg" },
  { id:19, paper:"Media Coverage",       color:"#37474F", link:"https://ibb.co/d06vfMkx", img:"https://i.ibb.co/xSGb2Lzd/Whats-App-Image-2026-03-30-at-11-08-56.jpg" },
];

const videoLinks: VideoItem[] = [
  { id:1, title:"ऑरा-द पावर ऑफ शी में 50 प्रेरणादायी महिलाओं का सम्मान", platform:"YouTube",  url:"https://youtu.be/Hco-Ztk7-nI",                 icon:"▶", color:"#FF0000" },
  { id:2, title:"AURA – The Power of She | Full Event Coverage",             platform:"YouTube",  url:"https://www.youtube.com/watch?v=3yuMEtumGUQ",  icon:"▶", color:"#FF0000" },
  { id:3, title:"Jaipur News | ऑरा-द पावर ऑफ शी | JAN TV",                 platform:"JAN TV",   url:"https://youtu.be/1mpd-lwfo9o",                 icon:"📺", color:"#E53935" },
  { id:4, title:"AURA 2026 Event Highlights",                                platform:"YouTube",  url:"https://share.google/G287ZuwPDdD2rkmDQ",       icon:"▶", color:"#FF0000" },
  { id:5, title:"AURA – The Power of She | Official Event Video",            platform:"Facebook", url:"https://www.facebook.com/share/v/18EcLp3VVx/", icon:"f", color:"#1877F2" },
  { id:6, title:"Award Ceremony Highlights – AURA 2026",                    platform:"Facebook", url:"https://www.facebook.com/share/v/1DafxqVCeu/", icon:"f", color:"#1877F2" },
  { id:7, title:"50 Women Achievers Celebration – AURA 2026",               platform:"Facebook", url:"https://www.facebook.com/share/v/1DDzK4bZZQ/", icon:"f", color:"#1877F2" },
];

const B = { navy:"#002D62", teal:"#00796B", gold:"#C9A032", pink:"#C2185B", ivory:"#F8F7F3" };
const INITIAL = 8;

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  return (
    <a href={photo.link} target="_blank" rel="noopener noreferrer"
      style={{
        display:"block", borderRadius:10, overflow:"hidden",
        boxShadow:"0 2px 12px rgba(0,0,0,0.09)", textDecoration:"none",
        background:"#fff", position:"relative",
        transition:"transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.16)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.09)";}}
    >
      <img src={photo.img} alt={`AURA Event Photo ${index+1}`} loading="lazy"
        style={{width:"100%", height:200, objectFit:"cover", display:"block"}} />
      <div style={{
        position:"absolute", bottom:0, left:0, right:0,
        background:"linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
        padding:"20px 10px 8px", color:"#fff", fontSize:11,
        fontWeight:600, textAlign:"right",
      }}>View Full →</div>
    </a>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer"
      style={{
        display:"block", borderRadius:10, overflow:"hidden",
        boxShadow:"0 2px 10px rgba(0,0,0,0.07)", textDecoration:"none",
        border:"1px solid #F0E4E8", background:"#fff",
        transition:"transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.13)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,0.07)";}}
    >
      <div style={{background:item.color, padding:"7px 12px", display:"flex", alignItems:"center", gap:8}}>
        <span style={{fontSize:14}}>📰</span>
        <span style={{color:"#fff", fontSize:12.5, fontWeight:800}}>{item.paper}</span>
      </div>
      <img src={item.img} alt={item.paper} loading="lazy"
        style={{width:"100%", height:155, objectFit:"cover", display:"block"}} />
      <div style={{padding:"7px 12px"}}>
        <p style={{fontSize:11, color:B.teal, fontWeight:700, margin:0}}>View Clip →</p>
      </div>
    </a>
  );
}

export default function MediaEvents() {
  const [tab, setTab]         = useState<string>("photos");
  const [showAll, setShowAll] = useState<boolean>(false);
  const visible = showAll ? eventPhotos : eventPhotos.slice(0, INITIAL);

  const tabs = [
    { key:"photos", label:"📸 Event Photos",  count:eventPhotos.length },
    { key:"media",  label:"📰 Print Media",    count:mediaClips.length  },
    { key:"videos", label:"📺 TV & Top Media", count:videoLinks.length  },
  ];

  return (
    <section id="media-events" style={{background:B.ivory, padding:"64px 0 72px"}}>
      <div style={{maxWidth:1100, margin:"0 auto", padding:"0 20px"}}>

        {/* Header */}
        <div style={{textAlign:"center", marginBottom:36}}>
          <span style={{
            display:"inline-block",
            background:"linear-gradient(135deg,#C2185B,#E91E8C)",
            color:"#fff", padding:"5px 18px", borderRadius:20,
            fontSize:11.5, fontWeight:700, letterSpacing:2,
            textTransform:"uppercase", marginBottom:14,
          }}>✨ Successfully Completed — 28th March 2026</span>

          <h2 style={{fontSize:"clamp(24px,4vw,36px)", fontWeight:800, color:B.navy, marginBottom:6}}>
            AURA – The Power of She
          </h2>
          <p style={{fontSize:14, color:"#555", marginBottom:4}}>
            Constitution Club of Rajasthan, Jaipur
          </p>
          <p style={{fontSize:13, color:B.teal, fontWeight:600, marginBottom:16}}>
            An Initiative by Navyaan Foundation &amp; SKF
          </p>

          <div style={{
            maxWidth:740, margin:"0 auto 20px",
            background:"#fff", border:`1.5px solid ${B.gold}`,
            borderRadius:12, padding:"14px 22px",
            boxShadow:"0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <p style={{fontSize:13.5, color:"#333", lineHeight:1.85, margin:0, textAlign:"center"}}>
              <strong style={{color:B.navy}}>Navyaan Foundation</strong> organised{" "}
              <strong style={{color:B.pink}}>AURA – The Power of She</strong>, a prestigious
              Women's Empowerment Award Ceremony celebrating{" "}
              <strong>50 inspiring women achievers</strong> of Rajasthan across Culture,
              Leadership &amp; Social Impact. Graced by{" "}
              <strong style={{color:B.navy}}>
                Hon'ble Ministers, MLAs, dignitaries, Mahatma Gandhi Hospital doctors &amp; fashion designer Aayush Soni
              </strong>
              {" "}— covered by <strong>19+ print media houses &amp; major TV channels</strong>.
            </p>
          </div>

          <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:14}}>
            {[{num:"50+",label:"Women Honoured"},{num:"19+",label:"Print Media"},{num:"7",label:"TV & Video"},{num:"500+",label:"Attendees"}].map(s=>(
              <div key={s.label} style={{
                background:"#fff", border:`2px solid ${B.gold}`,
                borderRadius:12, padding:"12px 20px", textAlign:"center", minWidth:100,
                boxShadow:"0 2px 10px rgba(0,0,0,0.06)",
              }}>
                <div style={{fontSize:24, fontWeight:800, color:B.pink, lineHeight:1}}>{s.num}</div>
                <div style={{fontSize:11, color:"#666", marginTop:3, fontWeight:600}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{display:"flex", justifyContent:"center", gap:10, marginBottom:32, flexWrap:"wrap"}}>
          {tabs.map(t=>(
            <button key={t.key}
              onClick={()=>{setTab(t.key);setShowAll(false);}}
              style={{
                padding:"10px 22px", borderRadius:30, cursor:"pointer",
                fontSize:13.5, fontWeight:700, border:"2px solid",
                transition:"all 0.2s",
                background:  tab===t.key?B.pink:"#fff",
                color:       tab===t.key?"#fff":B.pink,
                borderColor: tab===t.key?B.pink:"#F8BBD9",
                boxShadow:   tab===t.key?"0 4px 14px rgba(194,24,91,0.25)":"none",
              }}
            >
              {t.label}
              <span style={{
                marginLeft:7,
                background:tab===t.key?"rgba(255,255,255,0.25)":"#FCE4EC",
                color:tab===t.key?"#fff":B.pink,
                borderRadius:10, padding:"1px 8px", fontSize:11, fontWeight:800,
              }}>{t.count}</span>
            </button>
          ))}
        </div>

        {/* Photos */}
        {tab==="photos" && (
          <>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:14}}>
              {visible.map((p,i)=><PhotoCard key={p.id} photo={p} index={i}/>)}
            </div>
            <div style={{textAlign:"center", marginTop:24}}>
              {!showAll ? (
                <button onClick={()=>setShowAll(true)} style={{
                  background:`linear-gradient(135deg,${B.pink},#E91E8C)`,
                  color:"#fff", border:"none", borderRadius:30,
                  padding:"12px 32px", fontSize:14, fontWeight:700,
                  cursor:"pointer", boxShadow:"0 4px 16px rgba(194,24,91,0.3)",
                }}>
                  View All {eventPhotos.length} Photos ↓
                </button>
              ) : (
                <button onClick={()=>setShowAll(false)} style={{
                  background:"#fff", color:B.pink, border:`2px solid ${B.pink}`,
                  borderRadius:30, padding:"10px 28px", fontSize:13.5,
                  fontWeight:700, cursor:"pointer",
                }}>
                  Show Less ↑
                </button>
              )}
            </div>
          </>
        )}

        {/* Media */}
        {tab==="media" && (
          <>
            <div style={{textAlign:"center", marginBottom:20}}>
              <span style={{background:"#FFF0F5", border:"1.5px solid #F8BBD9", borderRadius:20, padding:"5px 16px", fontSize:12.5, color:B.pink, fontWeight:700}}>
                📰 Covered by {mediaClips.length} Media Houses
              </span>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))", gap:14}}>
              {mediaClips.map(item=><MediaCard key={item.id} item={item}/>)}
            </div>
          </>
        )}

        {/* Videos */}
        {tab==="videos" && (
          <div style={{display:"flex", flexDirection:"column" as const, gap:12, maxWidth:780, margin:"0 auto"}}>
            {videoLinks.map(v=>(
              <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer"
                style={{
                  display:"flex", alignItems:"center", gap:16,
                  background:"#fff", borderRadius:12, padding:"16px 20px",
                  boxShadow:"0 2px 10px rgba(0,0,0,0.07)",
                  textDecoration:"none", border:"1px solid #F0E8F0",
                  transition:"transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateX(4px)";e.currentTarget.style.boxShadow="0 4px 18px rgba(0,0,0,0.12)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateX(0)";  e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,0.07)";}}
              >
                <div style={{width:50,height:50,borderRadius:"50%",background:v.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:"#fff",fontWeight:800,flexShrink:0}}>{v.icon}</div>
                <div style={{flex:1}}>
                  <p style={{fontSize:14,fontWeight:700,color:B.navy,margin:"0 0 2px"}}>{v.title}</p>
                  <p style={{fontSize:11.5,color:"#888",margin:0}}>{v.platform}</p>
                </div>
                <div style={{background:`${v.color}15`,color:v.color,borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:700,flexShrink:0}}>Watch →</div>
              </a>
            ))}
          </div>
        )}

        {/* Bottom */}
        <div style={{marginTop:44,textAlign:"center",padding:"24px",background:`linear-gradient(135deg,${B.navy},#1a3a6e)`,borderRadius:14}}>
          <h3 style={{color:"#fff",fontSize:18,fontWeight:700,marginBottom:5}}>
            Thank You for Making AURA 2026 a Grand Success! 🌸
          </h3>
          <p style={{color:"#B0C4D8",fontSize:13,margin:0}}>
            An initiative by <strong style={{color:B.gold}}>Navyaan Foundation</strong> &amp; SKF &nbsp;|&nbsp;
            Together, Creating Impact Through Culture, Care &amp; Women's Leadership
          </p>
        </div>

      </div>
    </section>
  );
}
