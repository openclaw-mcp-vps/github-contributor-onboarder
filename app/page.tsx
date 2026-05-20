export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For OSS Maintainers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate New Contributor<br />
          <span className="text-[#58a6ff]">Onboarding on GitHub</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Detect first-time contributors via GitHub webhooks and instantly send personalized welcome messages with setup guides — no manual effort required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $7/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. Instant setup.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔔', title: 'Webhook Detection', desc: 'Listens for pull_request and issue events to spot first-timers instantly.' },
          { icon: '💬', title: 'Personalized Messages', desc: 'Posts a warm, project-specific welcome comment via the GitHub API.' },
          { icon: '📋', title: 'Setup Guides', desc: 'Includes your custom contribution workflow and environment setup steps.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$7</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              'Unlimited repositories',
              'Unlimited welcome messages',
              'Custom message templates',
              'Contributor tracking dashboard',
              'GitHub API integration',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it detect first-time contributors?',
              a: 'We listen to GitHub webhook events for pull requests and issues. When a contributor\'s first event is detected, the welcome flow triggers automatically.',
            },
            {
              q: 'Can I customize the welcome message?',
              a: 'Yes. You can write your own message template with Markdown, include links to your docs, and tailor it per repository.',
            },
            {
              q: 'What happens if I cancel my subscription?',
              a: 'Webhooks stop processing new events, but your existing data and templates are preserved for 30 days in case you resubscribe.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} GitHub Contributor Onboarder. All rights reserved.
      </footer>
    </main>
  )
}
