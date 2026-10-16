import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowLeft } from "lucide-react";
import CTASection from "@/components/CTASection";
import ShareButton from "@/components/ShareButton";

// Blog posts data
const blogPosts: Record<
  string,
  {
    title: string;
    date: string;
    author: string;
    category: string;
    excerpt: string;
    content: string[];
    image?: string;
  }
> = {
  "voices-in-the-wilderness-smitty-jeanne-smith": {
    title: "Pastors Smitty & Jeanne Smith Featured on Voices in the Wilderness",
    date: "2026-10-15",
    author: "Catalyst Team",
    category: "News",
    excerpt:
      "Pastors William (Smitty) and Jeanne Smith share their testimony and the story of Catalyst Ministries on Voices in the Wilderness. The television program is airing now, with the YouTube video expected in November.",
    content: [
      "**Igniting Change Through Christ**",
      "Pastors William (Smitty) and Jeanne Smith are being featured on the Christian television program Voices in the Wilderness in a two-part interview titled “Igniting Change Through Christ.”",
      "During the interview, Smitty and Jeanne share their testimony, the story behind Catalyst Ministries, and the many ways the ministry serves people through prison outreach, teaching, preaching, prayer, music, drama, film, and encouragement.",
      "**A Ministry Story Reaching a Wider Audience**",
      "Voices in the Wilderness describes Pastors William and Jeanne Smith as the founders of Catalyst Ministries and highlights their commitment to equipping communities and reaching the lost and incarcerated with the Gospel of Jesus Christ.",
      "The program is being broadcast during October 2026 on Flashpoint Television Network and additional stations and streaming outlets. Part 1 and Part 2 of “Igniting Change Through Christ” are being carried on participating networks throughout the month.",
      "**YouTube Video Coming in November**",
      "The Voices in the Wilderness YouTube release featuring Smitty and Jeanne is expected in November. We will add the full video directly to this page as soon as it is published.",
      "In the meantime, you can visit [Voices in the Wilderness — Most Recent Guests](https://voicesinthewildernesstv.com/most-recent-guests) to read their feature on Pastors Smitty and Jeanne.",
      "You can also visit the [Voices in the Wilderness YouTube channel](https://www.youtube.com/@VoicesTelevision) for their past interviews and upcoming releases.",
      "**About Catalyst Ministries**",
      "Catalyst Ministries was founded by Pastors William (Smitty) and Jeanne Smith. Their team shares the Gospel through teaching, preaching, testimonies, prayer, worship, drama, film, prison ministry, community outreach, and international missions.",
      "We are grateful for the opportunity to share what God has done through this ministry with viewers across the country and around the world.",
    ],
    image: "https://static.wixstatic.com/media/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg/v1/fill/w_973%2Ch_767%2Cal_c%2Cq_85/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg",
  },

  "haiti-leadership-conference-2026": {
    title: "Haiti Leadership Conference 2026 — Ebenezer",
    date: "2026-08-27",
    author: "Catalyst Team",
    category: "International Outreach",
    excerpt:
      "Our ministry partners at Église Sur Le Rocher Haiti gathered leaders under the theme “Ebenezer — Thus Far the Lord Has Helped Us,” based on 1 Samuel 7:12.",
    content: [
      "**Ebenezer — Thus Far the Lord Has Helped Us**",
      "In August 2026, our ministry partners at Église Sur Le Rocher Haiti gathered Christian leaders for their annual Leaders Conference in Haiti. The conference theme was “Ebenezer — Thus Far the Lord Has Helped Us,” drawn from 1 Samuel 7:12.",
      "The church’s original announcement was published in French. In English, the central message is: “Leaders Conference — Theme: Ebenezer, Thus Far the Lord Has Helped Us — 1 Samuel 7:12.” The August 27 post highlighted the third day of the 2026 gathering.",
      "**A Time for Worship, Teaching, and Encouragement**",
      "The conference brought leaders together for worship, biblical teaching, fellowship, encouragement, and renewed commitment to serving Christ faithfully in Haiti.",
      "For Catalyst Ministries, leadership conferences like this are an important part of our long-standing relationship with the Haitian church. We are thankful for the pastors and ministry leaders who continue serving their communities with courage and faith.",
      "**A Jubilee Season for Église Sur Le Rocher Haiti**",
      "The conference took place during a historic season for Église Sur Le Rocher Haiti. On August 30, 2026, the church celebrated its 1989–2026 jubilee under the same Ebenezer theme.",
      "The celebration brought together thousands of worshipers from surrounding communities for thanksgiving, testimonies about the church’s impact on families, prayer for the nation, fellowship, and joyful worship.",
      "The message of the season was simple and powerful: through every challenge, God has remained faithful.",
      "**English Translation of the 2026 Church Update**",
      "“Ebenezer — Thus Far the Lord Has Helped Us.” The church gave thanks for God’s faithfulness, celebrated the testimony of generations, prayed for Haiti, and renewed its commitment to continue serving in the years ahead.",
      "**Our Continuing Partnership in Haiti**",
      "Catalyst Ministries has supported ministry in Haiti for more than two decades through leadership conferences, worship and preaching, practical projects, supplies, financial support, and ongoing relationships with local churches and ministry leaders.",
      "We remain grateful for the privilege of standing with our brothers and sisters in Haiti. Their faith, perseverance, and love for Christ continue to inspire us.",
      "Visit our [International Outreach page](/outreach-international) to learn more about our continuing work in Haiti.",
    ],
    image: "/images/Haiti-Crusade-crowdn1.jpg",
  },

  "the-only-way-film-released": {
    title: '"The Only Way" Film Released',
    date: "2024-12-15",
    author: "Catalyst Team",
    category: "Productions",
    excerpt:
      'Our motion picture "The Only Way" is now complete and available for viewing! This life-changing film takes you on a journey with a man who witnessed true miracles firsthand.',
    content: [
      'After years of dedication, prayer, and hard work, we are thrilled to announce that our feature film "The Only Way" is now complete and ready to transform lives!',

      "This powerful motion picture tells the incredible true story of a man who witnessed genuine miracles and discovered that Jesus Christ is truly the only way to salvation, hope, and eternal life.",

      "**About the Film**",

      '"The Only Way" is more than just a movie—it\'s a testimony to the power of God and the reality of His presence in our lives. Through compelling storytelling, authentic performances, and breathtaking cinematography, this film will challenge viewers to examine their own faith journey.',

      "**What Makes This Film Special**",

      "• Based on true events and real testimonies",
      "• Features powerful dramatic performances from our A.S.K. Drama team",
      "• Professionally produced with theatrical quality",
      "• Appropriate for all ages",
      "• Perfect for church screenings and outreach events",

      "**How to Watch**",

      "The film is now available for viewing! Visit [theonlywayfilm.com](https://theonlywayfilm.com) for:",
      "• Streaming options",
      "• Upcoming theatrical screenings",
      "• Group viewing licenses for churches",
      "• Discussion guides for small groups",

      '**Bring "The Only Way" to Your Church**',

      "We offer special church screening packages that include:",
      "• Digital screening rights",
      "• Discussion materials",
      "• Promotional graphics",
      "• Optional Q&A with the cast and crew",

      "Contact us at 239-247-2330 or catalystministriesfl@gmail.com to schedule a screening at your church or community center.",

      "**Our Prayer**",

      'Our prayer is that "The Only Way" will reach millions with the Gospel message, lead people to Christ, and strengthen the faith of believers everywhere. We believe God has ordained this film for such a time as this.',

      "Thank you to everyone who prayed, donated, and supported this project. To God be all the glory!",
    ],
    image: "/images/theonlywaymovieposter.png",
  },

  "church-on-the-rock-baptism": {
    title: "Church on the Rock Baptism",
    date: "2026-10-16",
    author: "Catalyst Team",
    category: "International Outreach",
    excerpt: "Church on the Rock in Haiti celebrates water baptism.",
    image: "/images/haiti/church-on-the-rock-baptism-pool.jpg",
    content: [
      "Against all odds of gang warfare, Church on the Rock in Haiti continues to advance the Kingdom of God. These precious souls were water baptized this past Saturday. We thank all of you who pray for our team, along with those who sow into the ministry. Joined with the Holy Spirit, we are producing fruit!",
      "— Jay Threadgill, October 1, sharing the Church on the Rock Haiti baptism celebration.",
    ],
  },
  "ronal-r-testimony": {
    title: "Testimony: Ron R — Never Forgotten",
    date: "2025-10-15",
    author: "Ron R",
    category: "Testimonies",
    excerpt:
      "After 37 years incarcerated, Ron shares a powerful testimony of God’s mercy, a favorable parole review, and the hope that came through Christ and the love shown by Catalyst — a reminder that we are never forgotten.",
    content: [
      "**A Life Transformed by the Mercy of God**",
      "My name is Ron R. I first met Catalyst Ministries in the early 2000s at GCI, and the message I heard there has never left me: YOU ARE NEVER FORGOTTEN. God will never leave or forsake us.",
      "**A Hard Road**",
      "I have been incarcerated since 1988. At 21 years old, I was convicted of first-degree murder and sentenced to life with a 25-year mandatory before parole could even be considered. As of today, I have served 37 straight years.",
      "Over the years, I have lost both of my parents, a brother to suicide, and a sister to murder. While I still have siblings, some I have not heard from in many years. Yet, even in loss, God has surrounded me with a family in the Body of Christ.",
      "**A Praise Report**",
      "On October 15, 2025, I had my third parole hearing. I had no natural family present, but four brothers and sisters in Christ spoke on my behalf. Two members of my victim’s family spoke in opposition — and I understand the pain my crime caused. I will live with remorse for the rest of my life.",
      "I know God has forgiven me for the innocent life I took, and through His Holy Spirit I have learned to forgive myself. I pray for every victim my actions created. By God’s grace, I will never create another.",
      "**God Opened a Door**",
      "In spite of the odds, the Florida Parole Commission gave me a favorable ruling. I was placed in the Dr. Regina B. Shearn transition PRE-CTP program, with a subsequent review in 18 months and a projected release date of 2031 — a date that may come down at the next review. This program has paroled men with life sentences. To God be the glory.",
      "Proverbs 21:1 reminds me: ‘The king’s heart is in the hand of the Lord… He turns it wherever He wishes.’ God truly turned hearts in my case.",
      "**Gratitude**",
      "I am not a bad person; I made tragic choices. But in Christ, I can begin again. I am a child of God. Catalyst’s ministry is not in vain — your love reached me and countless others. Thank you for never forgetting us.",
      "— Ron R",
    ],
    image: "/images/ronaldRcoverphoto.png",
  },

  "new-prison-volunteers-needed": {
    title: "New Prison Ministry Volunteers Needed",
    date: "2024-10-05",
    author: "Jeanne Smith",
    category: "Prison Ministry",
    excerpt:
      "We're expanding our prison ministry team! Join us as we bring hope and the Gospel to inmates across Florida. Training provided for all new volunteers.",
    content: [
      "Are you looking for a way to make a real difference? Do you have a heart for those who are forgotten and overlooked? We need YOU to join our prison ministry team!",

      "**Why Prison Ministry?**",

      'Prison ministry is one of the most rewarding forms of service you can do. Jesus said in Matthew 25:36, "I was in prison and you came to visit me." When we minister to inmates, we are ministering to Christ Himself.',

      "Many inmates have never experienced genuine love, acceptance, or the Gospel. Your presence, prayers, and words can literally change the trajectory of someone's life—both here and for eternity.",

      "**What Does It Involve?**",

      "Our prison ministry teams visit 12 correctional facilities monthly across Florida. Here's what a typical visit looks like:",

      "**Weekly Ministry Activities:**",
      "• Chapel services with worship and preaching",
      "• Small group Bible studies",
      "• One-on-one counseling and prayer",
      "• Letter writing and correspondence",
      "• Holiday card distribution (Christmas, Easter)",
      "• Reentry support and mentoring",

      "**Time Commitment:**",
      "• Weekly visits (2-3 hours)",
      "• Flexible scheduling available",
      "• Monthly team meetings",
      "• Optional: Correspondence ministry from home",

      "**No Experience Necessary!**",

      "You don't need to be a Bible scholar or have ministry experience. We provide comprehensive training:",

      "**Training Includes:**",
      "• Security protocols and safety procedures",
      "• Effective communication in prison settings",
      "• Biblical counseling basics",
      "• Boundaries and self-care",
      "• Legal and ethical guidelines",

      "Training is conducted over two Saturday mornings and includes a mentored first visit.",

      "**Who Can Volunteer?**",

      "We welcome volunteers who:",
      "• Are 21 years or older",
      "• Have a genuine love for Christ and people",
      "• Can pass a background check",
      "• Are committed to consistent attendance",
      "• Have a teachable heart and servant attitude",

      "**The Rewards Are Eternal**",

      "Our volunteers consistently say that prison ministry has changed their lives as much as the inmates' lives:",

      '"I thought I was going to minister to them, but God used them to minister to me. Their hunger for God\'s Word puts my own faith to shame." - Mike, Volunteer for 3 years',

      "\"Seeing a hardened criminal break down in tears and give his life to Christ—there's nothing like it. I'm hooked for life.\" - Sarah, Volunteer for 5 years",

      "**Current Needs**",

      "We especially need volunteers for:",
      "• Men's maximum security facilities",
      "• Women's correctional centers",
      "• Youth detention facilities",
      "• Spanish-speaking services",
      "• Correspondence ministry (write from home)",

      "**Take the Next Step**",

      "If God is stirring your heart, don't ignore it! Here's how to get started:",

      "1. **Pray**: Ask God if this is His calling for you",
      "2. **Contact Us**: Call 239-247-2330 or email catalystministriesfl@gmail.com",
      "3. **Attend an Info Session**: We host monthly information meetings",
      "4. **Complete Training**: Two Saturdays to get equipped",
      "5. **Start Serving**: Begin making an eternal impact!",

      "**Next Info Session:**",
      "Saturday, November 2nd at 10:00 AM",
      "Catalyst Ministries Office",
      "Naples, FL",

      "Space is limited—RSVP required!",

      "The harvest is plentiful, but the workers are few. Will you answer the call?",
    ],
    image: "/images/25-Smitty-preaching.jpg",
  },

};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return generatePageMetadata({
      title: "Post Not Found",
      description: "The blog post you are looking for does not exist.",
      path: "/blog",
    });
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: [
      "catalyst ministries",
      post.category.toLowerCase(),
      "ministry news",
      "christian ministry",
    ],
  });
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white mb-4">
            {post.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-primary-100">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {post.image && (
            <div className="mb-10 overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <div className="relative aspect-[16/9] w-full">
                {slug === "voices-in-the-wilderness-smitty-jeanne-smith" ? (
                  <div className="absolute inset-0 overflow-hidden bg-slate-900">
                    <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden">
                      <div
                        role="img"
                        aria-label="Voices in the Wilderness television studio backdrop"
                        className="absolute inset-0"
                        style={{ backgroundImage: "url('https://static.wixstatic.com/media/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg/v1/fill/w_973%2Ch_767%2Cal_c%2Cq_85/7fceaa_383abb0559454411a28bcfe3cdc50f3c~mv2.jpeg')", backgroundSize: "100% auto", backgroundPosition: "center top", backgroundRepeat: "no-repeat" }}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex h-[58%] flex-col items-center justify-center bg-gradient-to-t from-slate-950 via-slate-900 to-slate-900/90 px-4 text-center text-white">
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-200">Featured on Television</span>
                      <span className="mt-2 text-2xl font-bold sm:text-4xl">Voices in the Wilderness</span>
                      <span className="mt-2 text-base text-gray-200 sm:text-lg">Smitty &amp; Jeanne Smith — Igniting Change Through Christ</span>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                )}
              </div>
              {slug === "voices-in-the-wilderness-smitty-jeanne-smith" && (
                <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 text-center text-sm text-gray-600">
                  Official Voices in the Wilderness program backdrop · Smitty and Jeanne's episode: Igniting Change Through Christ
                </div>
              )}
              {slug === "haiti-leadership-conference-2026" && (
                <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 text-center text-sm text-gray-600">
                  Haiti ministry — celebrating worship, leadership, and God&apos;s faithfulness
                </div>
              )}
            </div>
          )}

          {slug === "haiti-leadership-conference-2026" && (
            <section className="mb-12 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-5 sm:p-8">
              <div className="text-center mb-6">
                <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
                  Direct from Haiti
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                  2026 Conference Photos &amp; Update
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                  This is the original 2026 update from Église Sur Le Rocher Haiti.
                  The Facebook post includes current conference photos and their message from the gathering.
                </p>
              </div>

              <div className="mx-auto w-full max-w-[500px] overflow-hidden rounded-xl bg-white shadow-lg">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feglisesurlerocherhaiti%2Fposts%2Fpfbid02qw2GBgiKEiuxrhmbeGTwjngG9d2dBJVbv5nczJwPB4Ewdvufmn2KWbLhFPkDQnwfl&show_text=true&width=500"
                  width="500"
                  height="829"
                  className="block w-full max-w-full border-0"
                  style={{ overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Église Sur Le Rocher Haiti 2026 leadership conference Facebook post"
                />
              </div>
            </section>
          )}

          {slug === "voices-in-the-wilderness-smitty-jeanne-smith" && (
            <section className="mb-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-600">
                Television Feature
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                Igniting Change Through Christ
              </h2>
              <p className="mt-3 text-gray-700">
                Voices in the Wilderness is featuring Pastors William (Smitty) and Jeanne Smith
                during October 2026. Their official guest feature highlights Catalyst Ministries,
                its prison ministry work, and the creative ways the team shares the Gospel through
                music, drama, film, teaching, preaching, testimonies, and prayer.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://voicesinthewildernesstv.com/most-recent-guests"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-primary-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  See the Official Guest Feature
                </a>
                <a
                  href="https://voicesinthewildernesstv.com/tv-schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-primary-200 bg-white px-5 py-3 font-semibold text-primary-700 transition-colors hover:bg-primary-50"
                >
                  View the TV Schedule
                </a>
              </div>
            </section>
          )}

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => {
              // Handle different content types
              if (paragraph.startsWith("![") && paragraph.includes("](")) {
                // Image
                const match = paragraph.match(/!\[([^\]]*)\]\(([^)]+)\)/);
                if (match) {
                  const [, alt, src] = match;
                  return (
                    <div
                      key={index}
                      className="my-8 rounded-xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={src}
                        alt={alt || "Haiti Conference"}
                        width={1200}
                        height={675}
                        className="w-full h-auto"
                      />
                    </div>
                  );
                }
              } else if (
                paragraph.startsWith("**") &&
                paragraph.endsWith("**")
              ) {
                // Heading
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {paragraph.replace(/\*\*/g, "")}
                  </h2>
                );
              } else if (paragraph.startsWith("•")) {
                // Bullet point - collect consecutive bullets
                return null; // Handle in next section
              } else if (paragraph.includes("[") && paragraph.includes("](")) {
                // Link in text
                const parts = paragraph.split(/\[([^\]]+)\]\(([^)]+)\)/);
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {parts.map((part, i) => {
                      if (i % 3 === 1) {
                        // Link text
                        return (
                          <a
                            key={i}
                            href={parts[i + 1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 underline"
                          >
                            {part}
                          </a>
                        );
                      } else if (i % 3 === 2) {
                        // Link URL (skip)
                        return null;
                      }
                      return part;
                    })}
                  </p>
                );
              } else {
                // Regular paragraph
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              }
            })}

            {/* Render bullet lists */}
            {post.content.filter((p) => p.startsWith("•")).length > 0 && (
              <ul className="list-disc list-inside space-y-2 mb-6">
                {post.content
                  .filter((p) => p.startsWith("•"))
                  .map((bullet, index) => (
                    <li key={index} className="text-gray-700">
                      {bullet.substring(2)}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {slug === "haiti-leadership-conference-2026" && (
            <section className="mt-12 rounded-2xl border border-primary-100 bg-primary-50 p-5 sm:p-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                  From Haiti
                </p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  See the Original 2026 Conference Post
                </h2>
                <p className="mt-3 text-gray-600">
                  The Facebook post below is from Église Sur Le Rocher Haiti and
                  includes the original 2026 conference photographs. The post remains
                  in its original language; the article above provides the English
                  translation and context.
                </p>
              </div>
              <div className="mx-auto mt-6 w-full max-w-[500px] overflow-hidden rounded-xl bg-white shadow-lg">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Feglisesurlerocherhaiti%2Fposts%2Fpfbid02qw2GBgiKEiuxrhmbeGTwjngG9d2dBJVbv5nczJwPB4Ewdvufmn2KWbLhFPkDQnwfl&show_text=true&width=500"
                  width="500"
                  height="829"
                  className="w-full max-w-full border-0"
                  style={{ overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Église Sur Le Rocher Haiti 2026 leadership conference Facebook post"
                />
              </div>
            </section>
          )}

          {slug === "voices-in-the-wilderness-smitty-jeanne-smith" && (
            <section className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-primary-950 to-primary-800 text-white shadow-xl">
              <div className="grid items-center gap-0 md:grid-cols-2">
                <div className="relative min-h-[280px]">
                  <Image
                    src="/images/catalyst-team.jpg"
                    alt="Catalyst Ministries team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/60" />
                </div>
                <div className="p-7 sm:p-9">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary-200">
                    Voices in the Wilderness TV
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">
                    Igniting Change Through Christ
                  </h2>
                  <p className="mt-4 text-primary-50">
                    The two-part interview features Pastors William (Smitty) and
                    Jeanne Smith sharing their testimony, prison ministry, and the
                    creative ways Catalyst presents the Gospel through music, drama,
                    film, teaching, preaching, prayer, and encouragement.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://voicesinthewildernesstv.com/most-recent-guests"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white px-5 py-2.5 font-semibold text-primary-800 transition hover:bg-primary-50"
                    >
                      See the Guest Feature
                    </a>
                    <a
                      href="https://voicesinthewildernesstv.com/tv-schedule"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/30 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
                    >
                      View TV Schedule
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-primary-200">
                    We&apos;ll add the YouTube video here when the November release
                    becomes available.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">
                Share this post:
              </span>
              <ShareButton title={post.title} text={post.excerpt} />
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection
        title="Get Involved"
        description="Want to learn more about this ministry or get involved? We'd love to hear from you!"
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View All News"
        secondaryButtonHref="/blog"
      />
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
