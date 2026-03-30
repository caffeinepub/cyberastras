export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // e.g. "Jan 15, 2026"
  dateValue: Date; // for sorting/filtering
}

export const allBlogPosts: BlogPost[] = [
  {
    title: "Top Online Security Risks Every Business Should Know in 2026",
    category: "Web Security",
    excerpt:
      "Hackers are getting smarter with AI. Here is what every business needs to watch out for in 2026 to keep their websites safe.",
    content: `Cybercriminals today are using artificial intelligence to automate attacks that used to take days — now they happen in seconds. If your business has a website, an online store, or even just a contact form, you are a target.

The most common threats we see in 2026 are: weak passwords that are easy to guess, outdated software with known security holes, and fake login pages designed to steal employee credentials. These are not rare events — they happen to small businesses every day.

The good news is that most of these risks can be fixed without spending a fortune. Regular security checks, strong passwords, and keeping your software up to date are the foundation. A professional security review can catch the gaps you might not even know exist.

At CyberAstras, we have helped businesses of all sizes understand and fix their biggest security weaknesses. If you are unsure where your business stands, the best first step is a simple conversation.`,
    author: "Deepak Sharma",
    date: "Jan 15, 2026",
    dateValue: new Date("2026-01-15"),
  },
  {
    title: "Is Your Business WiFi Actually Safe? What Most People Miss",
    category: "WiFi Security",
    excerpt:
      "Most businesses set up their WiFi once and never check it again. Here is why that is a problem — and what to do about it.",
    content: `When was the last time you checked who is connected to your office WiFi? Most businesses have no idea — and that is a serious problem.

Unsecured or poorly set up wireless networks are one of the easiest ways for an attacker to get into your systems. They do not need to break down any digital doors. They just sit in a car outside your office, connect to your network, and quietly watch everything.

Common WiFi problems we find during security checks: default router passwords that have never been changed, guest networks that are connected to the main business network, and old security settings that are easy to break.

The fix is not complicated. A proper WiFi security check takes a few hours and can make a huge difference. We test your network the same way an attacker would — finding every weak point and showing you exactly how to close it.`,
    author: "Deepak Sharma",
    date: "Jan 28, 2026",
    dateValue: new Date("2026-01-28"),
  },
  {
    title:
      "How Fake Videos and Voice Clips Are Being Used to Trick People in 2026",
    category: "Awareness Training",
    excerpt:
      "Fake videos and voice clips are now being used to trick people. Learn how to teach your team to spot these new types of scams.",
    content: `Imagine getting a voice message from your boss asking you to transfer money urgently — but it is not really your boss. This is happening to real businesses right now, and the voice sounds completely real.

This type of scam uses AI to copy someone's voice or create a fake video of them saying things they never said. It used to require expensive equipment and technical skill. In 2026, anyone can do it with a free tool in minutes.

The best protection is not technology — it is your people. Training your team to pause and verify before acting on any urgent request (especially ones involving money or sensitive information) stops these attacks cold. A quick phone call to confirm is often all it takes.

We offer plain-language security awareness training designed for everyday employees — not just IT staff. Because the truth is, the person most likely to be tricked is not the tech expert. It is the busy manager who trusts a familiar voice.`,
    author: "Deepak Sharma",
    date: "Feb 3, 2026",
    dateValue: new Date("2026-02-03"),
  },
  {
    title: "Why Small Businesses Are Now the Biggest Target for Hackers",
    category: "Business Security",
    excerpt:
      "Hackers used to focus on big companies. Now small businesses are their favourite target. Here is why — and how to protect yourself.",
    content: `Large companies have full IT security teams, expensive tools, and strict policies. Small businesses usually have none of that — which makes them much easier to attack.

Hackers know this. In fact, studies show that more than half of all cyber attacks now target small businesses. They are not looking for fame or a challenge. They are looking for the easiest way to make money.

A typical attack against a small business looks like this: an employee gets a fake email, clicks a link, enters their login details on a fake page, and the attacker now has access to everything — emails, customer data, financial records.

The solution does not require a big budget. A basic security review, clear policies for your team, and regular checks can make your business a much harder target. Attackers almost always move on to an easier victim when they hit resistance.`,
    author: "Deepak Sharma",
    date: "Feb 20, 2026",
    dateValue: new Date("2026-02-20"),
  },
  {
    title:
      "Security Testing Options Explained: Which One Does Your Business Need in 2026",
    category: "Penetration Testing",
    excerpt:
      "Not sure which security service you need? We explain the difference in simple terms so you can make the right choice for your business.",
    content: `There are two main ways to check if your systems are secure: a vulnerability assessment and a penetration test. People often use these terms interchangeably, but they are actually quite different.

A vulnerability assessment scans your systems to find known security gaps. Think of it like a safety inspection — it tells you what problems exist and how serious they are. It is faster and a good starting point for most businesses.

A penetration test goes further. Instead of just finding weaknesses, we actually try to use them to get in — safely and with your permission. This shows you exactly how an attacker could reach your data, not just that a risk exists.

Which one do you need? If you have never had a security review before, a vulnerability assessment is a great first step. If you have already done that and want to understand the real-world risk, a penetration test is the next move. We are happy to walk you through both options and recommend what makes sense for your situation.`,
    author: "Deepak Sharma",
    date: "Mar 10, 2026",
    dateValue: new Date("2026-03-10"),
  },
  {
    title:
      "What Happens After a Hack: A Plain-Language Guide for Business Owners",
    category: "Incident Response",
    excerpt:
      "If your business gets hacked, the next 24 hours matter most. Here is what to do — and what not to do — in plain, simple steps.",
    content: `Getting hacked is terrifying. Most business owners freeze or make things worse by acting too fast. Here is what to do if you suspect your systems have been breached.

First, do not panic and do not turn off your computers right away. While it feels like the right move, shutting everything down can destroy evidence you will need later. Instead, disconnect from the internet — unplug the network cable or disable WiFi on the affected machines.

Second, change your passwords from a clean, unaffected device — especially email, banking, and cloud accounts. Then contact your internet provider and, if customer data was involved, seek legal advice about your reporting responsibilities.

The best time to prepare for an incident is before it happens. Having a simple one-page response plan for your team can save hours of chaos. We can help you create one that fits your business size and risk level — so if something does happen, your team knows exactly what to do.`,
    author: "Deepak Sharma",
    date: "Mar 25, 2026",
    dateValue: new Date("2026-03-25"),
  },
  {
    title:
      "How to Tell If Your Website Has Been Hacked (Without Being Technical)",
    category: "Web Security",
    excerpt:
      "Your website could be hacked right now and you would not even know. Here are the warning signs to look for.",
    content: `Many websites get hacked quietly. The attacker does not want you to know — they are using your site to send spam, steal customer information, or spread malware to your visitors. By the time you notice, the damage is already done.

Here are the warning signs every business owner should know: your website loads slower than usual for no clear reason; visitors are being redirected to strange websites; Google marks your site as dangerous; new accounts or admin users appear that you did not create.

If any of these happen, do not ignore them. Take your site offline temporarily, contact your hosting provider, and get a security professional involved. Acting fast limits the damage.

The best prevention is regular security checks and keeping your website software up to date. Most hacked websites were running outdated plugins or themes with known security holes. A small amount of maintenance goes a very long way.`,
    author: "Deepak Sharma",
    date: "Apr 8, 2026",
    dateValue: new Date("2026-04-08"),
  },
  {
    title: "Passwords Are Still the Weakest Link — Here Is How to Fix That",
    category: "Awareness Training",
    excerpt:
      "Most data breaches still start with a weak or stolen password. Here is the simple fix that every business can do today.",
    content: `Despite all the advances in security technology, weak passwords are still responsible for the majority of business data breaches. It is not a technology problem — it is a habit problem.

Using the same password on multiple websites is dangerous. If one website gets hacked and your password is leaked, attackers will try that same password on your email, bank, and every other account. This is called credential stuffing, and it works because most people reuse passwords.

The fix is straightforward: use a password manager. These tools create and store strong, unique passwords for every account you have. You only need to remember one master password. Good options include Bitwarden (free), 1Password, and Dashlane.

The second fix is two-factor authentication (2FA). This adds a second step when you log in — usually a code sent to your phone. Even if someone has your password, they cannot get in without that second step. Enable it on every account that offers it, starting with your email and banking.`,
    author: "Deepak Sharma",
    date: "Apr 22, 2026",
    dateValue: new Date("2026-04-22"),
  },
  {
    title: "What Is a Firewall and Does Your Business Actually Need One?",
    category: "Business Security",
    excerpt:
      "You have heard the word firewall a hundred times. But do you know what it does — and whether your business is protected?",
    content: `A firewall is basically a security guard for your network. It watches all the traffic coming in and going out of your systems and blocks anything that looks suspicious or is not supposed to be there.

Most modern operating systems come with a basic firewall built in. But for a business, especially one with multiple computers, a network-level firewall is a much stronger option. It sits between your internet connection and all your devices, watching everything at once.

Many small businesses think they do not need a firewall because they are too small to be a target. This is the wrong way to think about it. Automated attacks do not choose victims based on size — they scan every internet address they can find, looking for anything that is easy to get into.

Setting up proper firewall protection does not have to be expensive. A basic review of your current setup can tell you whether you are already protected or whether there are gaps that need to be closed. When in doubt, ask a professional — it is a small investment compared to the cost of a breach.`,
    author: "Deepak Sharma",
    date: "May 6, 2026",
    dateValue: new Date("2026-05-06"),
  },
  {
    title: "Cloud Storage Is Convenient — But Is It Secure?",
    category: "Business Security",
    excerpt:
      "Millions of businesses store their files in the cloud. But most do not know the simple steps that keep those files truly safe.",
    content: `Cloud storage services like Google Drive, Dropbox, and OneDrive are genuinely useful. They make it easy to work from anywhere and share files with your team. But convenience can create security gaps if you are not careful.

The biggest mistake we see: sharing files or folders with "anyone who has the link" and then forgetting about it. Those links do not expire. If someone finds or guesses that link, they have access to your files indefinitely.

Other common problems: accounts with no two-factor authentication, ex-employees who still have access, and files containing sensitive data stored without any encryption.

A quick audit of your cloud storage — checking who has access to what, removing old permissions, and enabling stronger login security — can be done in an afternoon and makes a real difference. We can walk your team through this process or do the audit for you.`,
    author: "Deepak Sharma",
    date: "May 20, 2026",
    dateValue: new Date("2026-05-20"),
  },
  {
    title:
      "Why You Should Never Skip Software Updates (Even When It Is Annoying)",
    category: "Business Security",
    excerpt:
      "That update notification you keep dismissing? Hackers are counting on you to ignore it. Here is why updates matter.",
    content: `Every time your phone, computer, or software asks you to update, there is a reason. Most updates contain fixes for security vulnerabilities — weaknesses that have been discovered and that attackers are already trying to use.

When you dismiss that update notification, you are leaving a known door open. Attackers actively scan for systems running old software because they know the exact vulnerabilities they can exploit. It is like knowing your neighbour never locks their back door.

The EternalBlue attack, which caused billions of dollars in damage worldwide, specifically targeted computers that had not installed a security update that had been available for months. The patch was free and available — people just had not applied it.

Enabling automatic updates on all your devices and software is one of the simplest and most effective security steps you can take. For business software that requires manual updates, schedule a regular time each month to review and apply them.`,
    author: "Deepak Sharma",
    date: "Jun 3, 2026",
    dateValue: new Date("2026-06-03"),
  },
  {
    title: "How to Spot a Phishing Email (Real Examples and Red Flags)",
    category: "Awareness Training",
    excerpt:
      "Phishing emails have gotten much harder to spot. Here are the red flags that can help you and your team stay one step ahead.",
    content: `Phishing emails — fake messages designed to trick you into giving away your login details or clicking a harmful link — have become sophisticated. They no longer look obviously fake. Many are well-written, professionally designed, and appear to come from legitimate companies.

Here are the key red flags to look for: urgency ("Your account will be closed in 24 hours"); requests for personal information via email; links that look almost right but have a small typo (like "paypa1.com" instead of "paypal.com"); unexpected attachments; and emails that arrived even though you did not expect any contact from that company.

The safest habit is simple: if an email asks you to click a link and log in somewhere, go directly to that website by typing the address yourself — do not click the link. This one habit blocks the vast majority of phishing attacks.

For businesses, we offer team training sessions that walk employees through real examples of phishing emails and teach them how to react safely. Awareness is your strongest defence against these attacks.`,
    author: "Deepak Sharma",
    date: "Jun 17, 2026",
    dateValue: new Date("2026-06-17"),
  },
];

// Returns only posts that have been published (date <= today), sorted newest first
export function getPublishedPosts(): BlogPost[] {
  const today = new Date();
  today.setHours(23, 59, 59, 999); // include today's posts
  return allBlogPosts
    .filter((post) => post.dateValue <= today)
    .sort((a, b) => b.dateValue.getTime() - a.dateValue.getTime());
}

// Keep this for any legacy imports
export const staticBlogPosts = allBlogPosts.slice(0, 3);
