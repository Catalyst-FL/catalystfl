import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import CTASection from '@/components/CTASection';

// Blog posts data
const blogPosts: Record<string, {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string[];
  image?: string;
}> = {
  'the-only-way-film-released': {
    title: '"The Only Way" Film Released',
    date: '2024-12-15',
    author: 'Catalyst Team',
    category: 'Productions',
    excerpt: 'Our motion picture "The Only Way" is now complete and available for viewing! This life-changing film takes you on a journey with a man who witnessed true miracles firsthand.',
    content: [
      'After years of dedication, prayer, and hard work, we are thrilled to announce that our feature film "The Only Way" is now complete and ready to transform lives!',
      
      'This powerful motion picture tells the incredible true story of a man who witnessed genuine miracles and discovered that Jesus Christ is truly the only way to salvation, hope, and eternal life.',
      
      '**About the Film**',
      
      '"The Only Way" is more than just a movie—it\'s a testimony to the power of God and the reality of His presence in our lives. Through compelling storytelling, authentic performances, and breathtaking cinematography, this film will challenge viewers to examine their own faith journey.',
      
      '**What Makes This Film Special**',
      
      '• Based on true events and real testimonies',
      '• Features powerful dramatic performances from our A.S.K. Drama team',
      '• Professionally produced with theatrical quality',
      '• Appropriate for all ages',
      '• Perfect for church screenings and outreach events',
      
      '**How to Watch**',
      
      'The film is now available for viewing! Visit [theonlywayfilm.com](https://theonlywayfilm.com) for:',
      '• Streaming options',
      '• Upcoming theatrical screenings',
      '• Group viewing licenses for churches',
      '• Discussion guides for small groups',
      
      '**Bring "The Only Way" to Your Church**',
      
      'We offer special church screening packages that include:',
      '• Digital screening rights',
      '• Discussion materials',
      '• Promotional graphics',
      '• Optional Q&A with the cast and crew',
      
      'Contact us at 239-247-2330 or catalystministriesfl@gmail.com to schedule a screening at your church or community center.',
      
      '**Our Prayer**',
      
      'Our prayer is that "The Only Way" will reach millions with the Gospel message, lead people to Christ, and strengthen the faith of believers everywhere. We believe God has ordained this film for such a time as this.',
      
      'Thank you to everyone who prayed, donated, and supported this project. To God be all the glory!',
    ],
    image: '/images/theonlywaymovieposter.png',
  },
  
  'haiti-leadership-conference-2024': {
    title: 'Haiti Leadership Conference 2024',
    date: '2024-11-20',
    author: 'Pastor Smitty',
    category: 'International Outreach',
    excerpt: 'Over 1,500 pastors and leaders gathered for our annual leadership conference in Port-au-Prince. Powerful worship, teaching, and fellowship marked this year\'s event.',
    content: [
      'What an incredible blessing to return to Haiti once again! This year\'s annual leadership conference exceeded all our expectations as over 1,500 pastors, church leaders, and ministry workers gathered in Port-au-Prince for three days of powerful teaching, worship, and fellowship.',
      
      '**Conference Highlights**',
      
      'This year\'s theme was "Leading with Faith in Difficult Times" – a message that resonated deeply with our Haitian brothers and sisters who face daily challenges yet continue to serve God with joy and dedication.',
      
      '**Day 1: Foundations of Leadership**',
      '• Morning session: Biblical principles of servant leadership',
      '• Afternoon workshops: Practical ministry strategies',
      '• Evening: Powerful worship and testimonies',
      
      '**Day 2: Ministry in Crisis**',
      '• Teaching on maintaining faith during hardship',
      '• Small group discussions and prayer',
      '• Resource distribution: Bibles, teaching materials, and supplies',
      
      '**Day 3: Commissioning Service**',
      '• Final teaching and encouragement',
      '• Prayer and commissioning for the year ahead',
      '• Communion service with all attendees',
      
      '**The Impact**',
      
      'These conferences are more than events—they are lifelines for Haitian pastors who often minister in isolation with limited resources. Many travel for hours, some walking for days, just to attend.',
      
      'One pastor shared: "This conference reminds me that I am not alone. I return to my village with renewed strength, fresh teaching, and the knowledge that my brothers and sisters around the world are praying for me."',
      
      '**Resources Distributed**',
      
      'Thanks to generous donations, we were able to provide:',
      '• 800 Bibles in Haitian Creole',
      '• Leadership training materials',
      '• Children\'s ministry resources',
      '• Medical supplies for rural clinics',
      '• Food supplies for orphanages',
      
      '**20+ Years of Partnership**',
      
      'This marks our 20th year of consistent partnership with the Haitian church. What started as a small gathering has grown into a movement that impacts thousands of churches across Haiti.',
      
      'Through political upheaval, natural disasters, and economic challenges, we have remained committed to our Haitian family. This is not just a ministry trip—this is a covenant relationship.',
      
      '**How You Can Help**',
      
      'The needs in Haiti are immense, but so is the faith of the Haitian people. Your partnership makes events like this possible:',
      '• $50 sponsors a pastor to attend the conference',
      '• $100 provides Bibles and teaching materials',
      '• $250 supports an orphanage for a month',
      '• $500 funds a rural medical clinic',
      
      'To give specifically to our Haiti ministry, visit our website or call 239-247-2330.',
      
      'Thank you for standing with us and with our Haitian brothers and sisters. Together, we are making an eternal impact!',
    ],
    image: '/images/Haiti-Crusade-crowdn1.jpg',
  },
  
  'new-prison-volunteers-needed': {
    title: 'New Prison Ministry Volunteers Needed',
    date: '2024-10-05',
    author: 'Jeanne Smith',
    category: 'Prison Ministry',
    excerpt: 'We\'re expanding our prison ministry team! Join us as we bring hope and the Gospel to inmates across Florida. Training provided for all new volunteers.',
    content: [
      'Are you looking for a way to make a real difference? Do you have a heart for those who are forgotten and overlooked? We need YOU to join our prison ministry team!',
      
      '**Why Prison Ministry?**',
      
      'Prison ministry is one of the most rewarding forms of service you can do. Jesus said in Matthew 25:36, "I was in prison and you came to visit me." When we minister to inmates, we are ministering to Christ Himself.',
      
      'Many inmates have never experienced genuine love, acceptance, or the Gospel. Your presence, prayers, and words can literally change the trajectory of someone\'s life—both here and for eternity.',
      
      '**What Does It Involve?**',
      
      'Our prison ministry teams visit 12 correctional facilities monthly across Florida. Here\'s what a typical visit looks like:',
      
      '**Weekly Ministry Activities:**',
      '• Chapel services with worship and preaching',
      '• Small group Bible studies',
      '• One-on-one counseling and prayer',
      '• Letter writing and correspondence',
      '• Holiday card distribution (Christmas, Easter)',
      '• Reentry support and mentoring',
      
      '**Time Commitment:**',
      '• Weekly visits (2-3 hours)',
      '• Flexible scheduling available',
      '• Monthly team meetings',
      '• Optional: Correspondence ministry from home',
      
      '**No Experience Necessary!**',
      
      'You don\'t need to be a Bible scholar or have ministry experience. We provide comprehensive training:',
      
      '**Training Includes:**',
      '• Security protocols and safety procedures',
      '• Effective communication in prison settings',
      '• Biblical counseling basics',
      '• Boundaries and self-care',
      '• Legal and ethical guidelines',
      
      'Training is conducted over two Saturday mornings and includes a mentored first visit.',
      
      '**Who Can Volunteer?**',
      
      'We welcome volunteers who:',
      '• Are 21 years or older',
      '• Have a genuine love for Christ and people',
      '• Can pass a background check',
      '• Are committed to consistent attendance',
      '• Have a teachable heart and servant attitude',
      
      '**The Rewards Are Eternal**',
      
      'Our volunteers consistently say that prison ministry has changed their lives as much as the inmates\' lives:',
      
      '"I thought I was going to minister to them, but God used them to minister to me. Their hunger for God\'s Word puts my own faith to shame." - Mike, Volunteer for 3 years',
      
      '"Seeing a hardened criminal break down in tears and give his life to Christ—there\'s nothing like it. I\'m hooked for life." - Sarah, Volunteer for 5 years',
      
      '**Current Needs**',
      
      'We especially need volunteers for:',
      '• Men\'s maximum security facilities',
      '• Women\'s correctional centers',
      '• Youth detention facilities',
      '• Spanish-speaking services',
      '• Correspondence ministry (write from home)',
      
      '**Take the Next Step**',
      
      'If God is stirring your heart, don\'t ignore it! Here\'s how to get started:',
      
      '1. **Pray**: Ask God if this is His calling for you',
      '2. **Contact Us**: Call 239-247-2330 or email catalystministriesfl@gmail.com',
      '3. **Attend an Info Session**: We host monthly information meetings',
      '4. **Complete Training**: Two Saturdays to get equipped',
      '5. **Start Serving**: Begin making an eternal impact!',
      
      '**Next Info Session:**',
      'Saturday, November 2nd at 10:00 AM',
      'Catalyst Ministries Office',
      'Naples, FL',
      
      'Space is limited—RSVP required!',
      
      'The harvest is plentiful, but the workers are few. Will you answer the call?',
    ],
    image: '/images/25-Smitty-preaching.jpg',
  },
  
  'breakfast-ministry-breakthrough': {
    title: 'Breakthrough in Breakfast Ministry',
    date: '2024-09-12',
    author: 'Todd Fitts',
    category: 'National Outreach',
    excerpt: 'Nine years of faithful Saturday morning service has led to incredible transformations. Meet some of the lives changed through Breakfast in the Park.',
    content: [
      'For nine years, our team has gathered every Saturday morning at 6:00 AM to serve breakfast to the homeless in Cambier Park, Naples. What started as a simple act of service has become a powerful ministry that has transformed countless lives.',
      
      '**The Ministry That Almost Wasn\'t**',
      
      'When we first felt called to start this ministry, it seemed impossible. Who wants to wake up before dawn every Saturday? Would anyone even show up? Did we really have the resources?',
      
      'But God kept pressing on our hearts, and we took a step of faith. That first Saturday morning, 8 volunteers showed up—and 42 hungry people came for breakfast. We\'ve been serving ever since.',
      
      '**More Than a Meal**',
      
      'While we provide hot breakfast, coffee, and fellowship, we\'ve learned that people hunger for more than food. They need:',
      
      '• **Dignity** - To be seen and valued as human beings',
      '• **Hope** - To believe life can get better',
      '• **Community** - To know they\'re not alone',
      '• **Jesus** - The only One who can truly satisfy',
      
      'We don\'t preach at people while they eat. Instead, we build relationships, share our lives, and point people to Christ through our actions and conversations.',
      
      '**Recent Breakthroughs**',
      
      'The past few months have seen incredible breakthroughs:',
      
      '**James\'s Story:**',
      'James had been living under a bridge for three years, addicted to drugs and alcohol. He came to breakfast for six months before he finally opened up. Last month, James gave his life to Christ, entered a rehab program, and is now 60 days sober! He returns to serve breakfast with us every Saturday.',
      
      '**Maria\'s Story:**',
      'Maria fled an abusive relationship with nothing but the clothes on her back and her two children. Our team connected her with resources, provided temporary housing assistance, and walked alongside her. Today, Maria has a job, an apartment, and is active in a local church. Her kids are thriving in school.',
      
      '**The "Regulars":**',
      'Many of our breakfast guests have become family. We know their names, their stories, their struggles, and their victories. We pray with them, cry with them, and celebrate with them. Several have given their lives to Christ and are now helping us serve.',
      
      '**By the Numbers**',
      
      'Over 9 years, we\'ve served:',
      '• 47,000+ hot meals',
      '• 2,500+ bags of groceries',
      '• 1,800+ clothing items',
      '• 350+ people connected to housing resources',
      '• 89 documented salvations!',
      
      'But the real impact can\'t be measured in numbers—it\'s measured in changed lives and eternal souls.',
      
      '**The Secret Ingredient**',
      
      'The secret to our ministry\'s effectiveness? Consistency and love.',
      
      'We show up every single Saturday—rain, shine, holidays, hurricanes (well, maybe not hurricanes!). Our friends on the street know they can count on us. That consistency builds trust, and trust opens doors for the Gospel.',
      
      'And we genuinely love the people we serve. They\'re not projects or statistics—they\'re our friends, our brothers and sisters, image-bearers of God.',
      
      '**How You Can Get Involved**',
      
      'We need more hands and hearts in this ministry:',
      
      '**Volunteer Opportunities:**',
      '• **Cooking Team** - Prepare food Friday night (6-8 PM)',
      '• **Serving Team** - Serve breakfast Saturday morning (6-9 AM)',
      '• **Setup/Cleanup** - Help with logistics',
      '• **Prayer Team** - Pray with guests and team members',
      '• **Resource Coordinator** - Connect people with services',
      
      '**Donate:**',
      '• Food supplies (eggs, bacon, bread, coffee)',
      '• Hygiene kits',
      '• Clothing (especially men\'s sizes)',
      '• Financial support',
      
      '**Can\'t Volunteer?**',
      'Pray for us! Every Saturday morning at 6:00 AM, lift up our team and the people we serve.',
      
      '**Come See for Yourself**',
      
      'We invite you to join us for a Saturday morning. Experience the joy of serving, the power of community, and the privilege of representing Christ to those who need Him most.',
      
      'Your first Saturday with us might just change your life—it did for James, for Maria, and for countless others.',
      
      'Contact Todd Fitts at 239-247-2330 or catalystministriesfl@gmail.com to get involved.',
      
      'See you Saturday morning!',
    ],
    image: '/images/breakfast-park-team.jpg',
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return generatePageMetadata({
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
      path: '/blog',
    });
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${params.slug}`,
    keywords: ['catalyst ministries', post.category.toLowerCase(), 'ministry news', 'christian ministry'],
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

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
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => {
              // Handle different content types
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                // Heading
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h2>
                );
              } else if (paragraph.startsWith('•')) {
                // Bullet point - collect consecutive bullets
                return null; // Handle in next section
              } else if (paragraph.includes('[') && paragraph.includes('](')) {
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
            {post.content.filter(p => p.startsWith('•')).length > 0 && (
              <ul className="list-disc list-inside space-y-2 mb-6">
                {post.content
                  .filter(p => p.startsWith('•'))
                  .map((bullet, index) => (
                    <li key={index} className="text-gray-700">
                      {bullet.substring(2)}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Share this post:</span>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  }
                }}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </button>
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
