import { useState } from "react";

// ════════════════════════════════════════════════════════════
//  AURA – The Power of She  |  Media & Events Section
//  Navyaan Foundation + Sewa Kunj Foundation
// ════════════════════════════════════════════════════════════

const eventPhotos = [
  { id:1,  link:"https://ibb.co/kgnPpSDJ" },
  { id:2,  link:"https://ibb.co/5ht4N1wc" },
  { id:3,  link:"https://ibb.co/sJHz3FMx" },
  { id:4,  link:"https://ibb.co/W4QrZ3Bv" },
  { id:5,  link:"https://ibb.co/N67R1pC0" },
  { id:6,  link:"https://ibb.co/8nFz9zQz" },
  { id:7,  link:"https://ibb.co/tTQZ1xQW" },
  { id:8,  link:"https://ibb.co/kg5mRyRs" },
  { id:9,  link:"https://ibb.co/CpnfTS22" },
  { id:10, link:"https://ibb.co/m50pJ84N" },
  { id:11, link:"https://ibb.co/fd8xKfx8" },
  { id:12, link:"https://ibb.co/Y7gFpX15" },
  { id:13, link:"https://ibb.co/674kcVHH" },
  { id:14, link:"https://ibb.co/SDkr4067" },
  { id:15, link:"https://ibb.co/gFFhfgGR" },
  { id:16, link:"https://ibb.co/TBwmK1sJ" },
  { id:17, link:"https://ibb.co/vCPFhYK7" },
  { id:18, link:"https://ibb.co/n8CrNxBK" },
  { id:19, link:"https://ibb.co/LzY6q60D" },
  { id:20, link:"https://ibb.co/GvNZp2q3" },
  { id:21, link:"https://ibb.co/MTs11RY"  },
  { id:22, link:"https://ibb.co/hx6NZnDV" },
  { id:23, link:"https://ibb.co/fzgxXWn2" },
  { id:24, link:"https://ibb.co/7JRjVxfv" },
];

const mediaClips = [
  { id:1,  paper:"Dainik Bhaskar",          color:"#E53935", link:"https://ibb.co/qMNzKjm2" },
  { id:2,  paper:"Rajasthan Patrika",        color:"#1565C0", link:"https://ibb.co/9HXfXq45" },
  { id:3,  paper:"Punjab Kesari",            color:"#F57F17", link:"https://ibb.co/rRPQMXBj" },
  { id:4,  paper:"Dainik Navjyoti",          color:"#2E7D32", link:"https://ibb.co/Kn6v2M9"  },
  { id:5,  paper:"Rashtradoot",              color:"#6A1B9A", link:"https://ibb.co/5xLz0gzd" },
  { id:6,  paper:"Morning News",             color:"#00838F", link:"https://ibb.co/v4CwNRRF" },
  { id:7,  paper:"Business Remedies",        color:"#00796B", link:"https://ibb.co/FbhCYkrg" },
  { id:8,  paper:"Satta Jagat",              color:"#C62828", link:"https://ibb.co/JwNbnmDP" },
  { id:9,  paper:"Kamyab Kalam",             color:"#4527A0", link:"https://ibb.co/c7SP54b"  },
  { id:10, paper:"Mridul Patrika",           color:"#BF360C", link:"https://ibb.co/Txk891xT" },
  { id:11, paper:"Dainik Tasdeek",           color:"#37474F", link:"https://ibb.co/F4y58CDS" },
  { id:12, paper:"Sach Bedhrak",             color:"#1B5E20", link:"https://ibb.co/5xnCyXB2" },
  { id:13, paper:"Mahanagar Times",          color:"#880E4F", link:"https://ibb.co/zVtRXzpb" },
  { id:14, paper:"Hindustan Express",        color:"#0277BD", link:"https://ibb.co/shgZHGK"  },
  { id:15, paper:"Samachaar Jagat",          color:"#558B2F", link:"https://ibb.co/ccPBZJS1" },
  { id:16, paper:"Bhaskar News (Online)",    color:"#E53935", link:"https://www.bhaskarnewsline.com/hindi/news/%E2%80%98%E0%A4%91%E0%A4%B0%E0%A4%BE-%E2%80%93-%E0%A4%A6-%E0%A4%AA%E0%A4%BE%E0%A4%B5%E0%A4%B0-%E0%A4%91%E0%A4%AB-%E0%A4%B6%E0%A5%80%E2%80%99-%E0%A4%AE%E0%A5%87%E0%A4%82-50-%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%A6%E0%A4%BE%E0%A4%AF%E0%A5%80-%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%93%E0%A4%82-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A4%AE%E0%A5%8D%E0%A4%AE%E0%A4%BE%E0%A4%A8-49358" },
  { id:17, paper:"Hello Rajasthan (Online)", color:"#AD1457", link:"https://hellorajasthan.com/50-inspirational-women-honoured-at-aura-the-power-of-she" },
  { id:18, paper:"Khas Khabar (Online)",     color:"#00695C", link:"https://www.khaskhabar.com/local/rajasthan/jaipur-news/news-aura-%E2%80%93-the-power-of-she-honoring-50-inspiring-women-news-hindi-1-801925-KKN.html" },
  { id:19, paper:"Media Documentation",      color:"#37474F", link:"https://ibb.co/d06vfMkx" },
];

const videoLinks = [
  { id:1, title:"ऑरा-द पावर ऑफ शी में 50 प्रेरणादायी महिलाओं का सम्मान",  platform:"YouTube",  url:"https://youtu.be/Hco-Ztk7-nI",                     icon:"▶", color:"#FF0000" },
  { id:2, title:"AURA – The Power of She | Full Event Coverage",              platform:"YouTube",  url:"https://www.youtube.com/watch?v=3yuMEtumGUQ",      icon:"▶", color:"#FF0000" },
  { id:3, title:"Jaipur News | ऑरा-द पावर ऑफ शी अवॉर्ड समारोह | JAN TV",   platform:"JAN TV",   url:"https://youtu.be/1mpd-lwfo9o",                     icon:"📺", color:"#E53935" },
  { id:4, title:"AURA 2026 Event Highlights",                                 platform:"YouTube",  url:"https://share.google/G287ZuwPDdD2rkmDQ",           icon:"▶", color:"#FF0000" },
  { id:5, title:"AURA – The Power of She | Official Event Video",             platform:"Facebook", url:"https://www.facebook.com/share/v/18EcLp3VVx/",     icon:"f", color:"#1877F2" },
  { id:6, title:"Award Ceremony Highlights – AURA 2026",                     platform:"Facebook", url:"https://www.facebook.com/share/v/1DafxqVCeu/",     icon:"f", color:"#1877F2" },
  { id:7, title:"50 Women Achievers Celebration – AURA 2026",                platform:"Facebook", url:"https://www.facebook.com/share/v/1DDzK4bZZQ/",     icon:"f", color:"#1877F2" },
];

const B = { navy:"#002D62", teal:"#00796B", gold:"#C9A032", pink:"#C2185B", ivory:"#F8F7F3" };

// ── Photo grid card ────────────────────────────────────────
function PhotoCard({ photo, index }) {
  return (
    <a
      href={photo.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:"block", borderRadius:12, overflow:"hidden",
        background:`linear-gradient(135deg, ${B.pink}18, ${B.teal}18)`,
        boxShadow:"0 2px 12px rgba(0,0,0,0.08)",
        transition:"transform 0.2s, box-shadow 0.2s",
        textDecoration:"none", border:`1px solid ${B.pink}30`,
        minHeight:160,
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center",
      }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.15)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.08)";}}
    >
      <div style={{fontSize:32, marginBottom:6}}>📸</div>
      <div style={{fontSize:13, fontWeight:700, color:B.navy}}>Photo {index+1}</div>
      <div style={{
        marginTop:8, background:B.pink, color:"#fff",
        borderRadius:16, padding:"4px 14px",
        fontSize:11, fontWeight:700,
      }}>View Photo →</div>
    </a>
  );
}

// ── Media card ─────────────────────────────────────────────
function MediaCard({ item }) {
  const isOnline = !item.link.includes("ibb.co");
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display:"block", borderRadius:10, overflow:"hidden",
        boxShadow:"0 2px 10px rgba(0,0,0,0.07)",
        textDecoration:"none", border:"1px solid #F0E4E8",
        transition:"transform 0.2s, box-shadow 0.2s",
        background:"#fff",
      }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.13)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,0.07)";}}
    >
      <div style={{background:item.color, padding:"8px 14px", display:"flex", alignItems:"center", gap:8}}>
        <span style={{fontSize:15}}>📰</span>
        <span style={{color:"#fff", fontSize:13, fontWeight:800, flex:1}}>{item.paper}</span>
        {isOnline && (
          <span style={{
            background:"rgba(255,255,255,0.25)", color:"#fff",
            fontSize:9, padding:"2px 8px", borderRadius:10, fontWeight:700,
          }}>ONLINE</span>
        )}
      </div>
      <div style={{
        padding:"18px 14px",
        background:`${item.color}10`,
        display:"flex", flexDirection:"column",
        alignItems:"center", justifyContent:"center",
        minHeight:100,
      }}>
        <div style={{fontSize:28, marginBottom:4}}>
          {isOnline ? "🌐" : "📄"}
        </div>
        <div style={{fontSize:11.5, color:item.color, fontWeight:700, textAlign:"center"}}>
          {isOnline ? "Read Online Article →" : "View Newspaper Clip →"}
        </div>
      </div>
    </a>
  );
}

// ── MAIN ───────────────────────────────────────────────────
export default function MediaEvents() {
  const [tab, setTab] = useState("photos");

  const tabs = [
    { key:"photos", label:"📸 Event Photos",   count:eventPhotos.length },
    { key:"media",  label:"📰 Print Media",     count:mediaClips.length  },
    { key:"videos", label:"📺 TV & Top Media",   count:videoLinks.length  },
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
          <p style={{fontSize:13, color:B.teal, fontWeight:600, marginBottom:14}}>
            An Initiative by Navyaan Foundation &amp; SKF
          </p>

          {/* Event brief */}
          <div style={{
            maxWidth:720, margin:"0 auto 6px",
            background:"#fff", border:`1.5px solid ${B.gold}`,
            borderRadius:12, padding:"14px 22px",
            boxShadow:"0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <p style={{fontSize:13.5, color:"#333", lineHeight:1.8, margin:0, textAlign:"center"}}>
              <strong style={{color:B.navy}}>Navyaan Foundation</strong> organised{" "}
              <strong style={{color:B.pink}}>AURA – The Power of She</strong>, a prestigious
              Women's Empowerment Award Ceremony celebrating{" "}
              <strong>50 inspiring women achievers</strong> of Rajasthan across Culture,
              Leadership &amp; Social Impact. The event was graced by{" "}
              <strong style={{color:B.navy}}>
                Hon'ble Ministers, MLAs, dignitaries, doctors from Mahatma Gandhi Hospital,
                and fashion designer Aayush Soni
              </strong>, and received coverage across{" "}
              <strong>19+ print media houses &amp; major TV channels</strong>.
            </p>
          </div>

          {/* Stats */}
          <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:14, marginTop:22}}>
            {[
              {num:"50+", label:"Women Honoured"},
              {num:"19+", label:"Print Media"},
              {num:"7",   label:"Video Coverage"},
              {num:"500+",label:"Attendees"},
            ].map(s => (
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
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={()=>setTab(t.key)}
              style={{
                padding:"10px 22px", borderRadius:30, cursor:"pointer",
                fontSize:13.5, fontWeight:700, border:"2px solid",
                transition:"all 0.2s",
                background:  tab===t.key ? B.pink : "#fff",
                color:       tab===t.key ? "#fff" : B.pink,
                borderColor: tab===t.key ? B.pink : "#F8BBD9",
                boxShadow:   tab===t.key ? "0 4px 14px rgba(194,24,91,0.25)" : "none",
              }}
            >
              {t.label}
              <span style={{
                marginLeft:7,
                background: tab===t.key ? "rgba(255,255,255,0.25)" : "#FCE4EC",
                color:      tab===t.key ? "#fff" : B.pink,
                borderRadius:10, padding:"1px 8px", fontSize:11, fontWeight:800,
              }}>{t.count}</span>
            </button>
          ))}
        </div>

        {/* Photos tab */}
        {tab === "photos" && (
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",
            gap:14,
          }}>
            {eventPhotos.map((p, i) => <PhotoCard key={p.id} photo={p} index={i} />)}
          </div>
        )}

        {/* Media tab */}
        {tab === "media" && (
          <>
            <div style={{textAlign:"center", marginBottom:20}}>
              <span style={{
                background:"#FFF0F5", border:"1.5px solid #F8BBD9",
                borderRadius:20, padding:"5px 16px",
                fontSize:12.5, color:B.pink, fontWeight:700,
              }}>
                📰 Covered by {mediaClips.length} Media Houses
              </span>
            </div>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill, minmax(230px, 1fr))",
              gap:14,
            }}>
              {mediaClips.map(item => <MediaCard key={item.id} item={item} />)}
            </div>
          </>
        )}

        {/* Videos tab */}
        {tab === "videos" && (
          <div style={{display:"flex", flexDirection:"column", gap:12, maxWidth:780, margin:"0 auto"}}>
            {videoLinks.map(v => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display:"flex", alignItems:"center", gap:16,
                  background:"#fff", borderRadius:12, padding:"16px 20px",
                  boxShadow:"0 2px 10px rgba(0,0,0,0.07)",
                  textDecoration:"none", border:"1px solid #F0E8F0",
                  transition:"transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateX(4px)";e.currentTarget.style.boxShadow="0 4px 18px rgba(0,0,0,0.12)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateX(0)";e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,0.07)";}}
              >
                <div style={{
                  width:50, height:50, borderRadius:"50%",
                  background:v.color,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:18, color:"#fff", fontWeight:800, flexShrink:0,
                }}>{v.icon}</div>
                <div style={{flex:1}}>
                  <p style={{fontSize:14, fontWeight:700, color:B.navy, margin:"0 0 2px"}}>{v.title}</p>
                  <p style={{fontSize:11.5, color:"#888", margin:0}}>{v.platform}</p>
                </div>
                <div style={{
                  background:`${v.color}15`, color:v.color,
                  borderRadius:8, padding:"6px 14px",
                  fontSize:12, fontWeight:700, flexShrink:0,
                }}>Watch →</div>
              </a>
            ))}
          </div>
        )}

        {/* Bottom banner */}
        <div style={{
          marginTop:44, textAlign:"center",
          padding:"24px",
          background:`linear-gradient(135deg, ${B.navy}, #1a3a6e)`,
          borderRadius:14,
        }}>
          <h3 style={{color:"#fff", fontSize:18, fontWeight:700, marginBottom:5}}>
            Thank You for Making AURA 2026 a Grand Success! 🌸
          </h3>
          <p style={{color:"#B0C4D8", fontSize:13, margin:0}}>
            An initiative by <strong style={{color:B.gold}}>Navyaan Foundation</strong> &amp; SKF &nbsp;|&nbsp; Together, Creating Impact Through Culture, Care &amp; Women's Leadership
          </p>
        </div>

      </div>
    </section>
  );
}
