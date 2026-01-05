import { useState } from 'react';

export const YahooMail = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [currentFolder, setCurrentFolder] = useState('Inbox');

  const emails = [
    {
      id: 1,
      from: 'ConversionIQ Team',
      fromEmail: 'team@conversioniq.ai',
      subject: 'Your AI Assistant is Ready - Complete 2 Quick Steps',
      preview: 'Welcome to CommentResponder.ai! We\'re here to help you reclaim your time...',
      time: '10:30 AM',
      date: 'Jan 5',
      unread: true,
      starred: false,
      body: 'Welcome Email Content'
    },
    {
      id: 2,
      from: 'ConversionIQ Team',
      fromEmail: 'team@conversioniq.ai',
      subject: 'Train Chatti Like Your Best Employee',
      preview: 'Now that your accounts are connected, it\'s time to give Chatti its marching orders...',
      time: '9:15 AM',
      date: 'Jan 5',
      unread: true,
      starred: false,
      body: 'Training Email Content'
    },
    {
      id: 3,
      from: 'LinkedIn',
      fromEmail: 'messages-noreply@linkedin.com',
      subject: 'You have 3 new messages',
      preview: 'Check out your latest messages and stay connected with your network...',
      time: 'Yesterday',
      date: 'Jan 4',
      unread: false,
      starred: true,
      body: 'LinkedIn message content'
    }
  ];

  const folders = [
    { name: 'Inbox', count: 2, icon: '📥' },
    { name: 'Starred', count: 1, icon: '⭐' },
    { name: 'Sent', count: 0, icon: '📤' },
    { name: 'Drafts', count: 0, icon: '📝' },
    { name: 'Spam', count: 0, icon: '🚫' },
    { name: 'Trash', count: 0, icon: '🗑️' }
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-[#6001d2] text-white px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <svg className="w-24 h-6" viewBox="0 0 100 24" fill="white">
            <text x="0" y="18" fontSize="20" fontWeight="bold">Yahoo!</text>
          </svg>
          <span className="text-sm font-medium">Mail</span>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search mail"
            className="px-4 py-1.5 rounded-full bg-white/20 text-white placeholder-white/70 w-80 focus:outline-none focus:bg-white/30"
          />
          <button className="p-2 hover:bg-white/10 rounded">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 bg-[#f6f6f6] border-r border-gray-300 flex flex-col">
          <div className="p-4">
            <button className="w-full bg-[#188fff] hover:bg-[#1479d7] text-white px-6 py-2.5 rounded font-medium flex items-center justify-center gap-2">
              <span className="text-lg">+</span>
              Compose
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {folders.map((folder) => (
              <button
                key={folder.name}
                onClick={() => setCurrentFolder(folder.name)}
                className={`w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-gray-200 ${
                  currentFolder === folder.name ? 'bg-gray-200 border-l-4 border-[#6001d2]' : ''
                }`}
              >
                <span className="flex items-center gap-3 text-sm text-gray-800">
                  <span>{folder.icon}</span>
                  {folder.name}
                </span>
                {folder.count > 0 && (
                  <span className="text-xs bg-gray-400 text-white px-2 py-0.5 rounded-full">
                    {folder.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {!selectedEmail ? (
            <>
              {/* Toolbar */}
              <div className="border-b border-gray-300 px-4 py-3 flex items-center gap-3 bg-white">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4" />
                </label>
                <button className="p-2 hover:bg-gray-100 rounded" title="Delete">
                  🗑️
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Archive">
                  📦
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Mark as spam">
                  🚫
                </button>
                <div className="flex-1"></div>
                <button className="p-2 hover:bg-gray-100 rounded" title="Refresh">
                  🔄
                </button>
              </div>

              {/* Email List */}
              <div className="flex-1 overflow-y-auto">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className={`border-b border-gray-200 px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-start gap-3 ${
                      email.unread ? 'bg-blue-50' : 'bg-white'
                    }`}
                  >
                    <input type="checkbox" className="mt-1 w-4 h-4" />
                    <button className="mt-1 text-lg">
                      {email.starred ? '⭐' : '☆'}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className={`text-sm truncate ${email.unread ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                          {email.from}
                        </span>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{email.time}</span>
                      </div>
                      <div className={`text-sm truncate ${email.unread ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                        {email.subject}
                      </div>
                      <div className="text-xs text-gray-500 truncate">{email.preview}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Email Detail View */}
              <div className="border-b border-gray-300 px-4 py-3 flex items-center gap-3 bg-white">
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="p-2 hover:bg-gray-100 rounded"
                >
                  ← Back
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Delete">
                  🗑️
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Archive">
                  📦
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" title="Mark as spam">
                  🚫
                </button>
              </div>

              <div className="flex-1 overflow-y-auto bg-white p-6">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">{selectedEmail.subject}</h1>

                  <div className="flex items-start gap-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="w-10 h-10 bg-[#6001d2] rounded-full flex items-center justify-center text-white font-bold">
                      {selectedEmail.from[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{selectedEmail.from}</div>
                          <div className="text-sm text-gray-500">{selectedEmail.fromEmail}</div>
                        </div>
                        <div className="text-sm text-gray-500">{selectedEmail.date} at {selectedEmail.time}</div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">To: me</div>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    {selectedEmail.id === 1 && (
                      <div className="text-gray-800">
                        <p className="mb-4">Hi there,</p>
                        <p className="mb-4">Welcome to ConversionIQ! We're here to help you reclaim your time. To get the system working, we need to build your foundation.</p>

                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 my-6 border border-purple-200">
                          <h2 className="text-xl font-bold text-purple-900 mb-3">Your AI Assistant is Ready</h2>
                          <p className="text-gray-700 mb-4">Just 2 quick steps to activate always-on engagement</p>

                          <div className="grid md:grid-cols-2 gap-4 my-6">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <div className="text-2xl mb-2">📊</div>
                              <h3 className="font-bold mb-2">Define your Workspace</h3>
                              <p className="text-sm text-gray-600">Turn questions and complaints into qualified, high-intent leads.</p>
                            </div>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <div className="text-2xl mb-2">🔗</div>
                              <h3 className="font-bold mb-2">Connect Socials</h3>
                              <p className="text-sm text-gray-600">Link your Facebook and Instagram so our AI can start monitoring your comments in real-time.</p>
                            </div>
                          </div>

                          <button className="bg-[#ef2d61] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#d42656] w-full">
                            Start the 2-Step Setup Now →
                          </button>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
                          <p className="text-green-800 font-semibold">Once these are connected, the "engine" is officially running!</p>
                        </div>

                        <p className="mt-6">Best,<br/>The ConversionIQ Team</p>
                      </div>
                    )}

                    {selectedEmail.id === 2 && (
                      <div className="text-gray-800">
                        <p className="mb-4">Hey there,</p>
                        <p className="mb-4">Now that your accounts are connected, it's time to give Chatti its "marching orders." Configure these two things and your pages will run on autopilot.</p>

                        <div className="space-y-4 my-6">
                          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6">
                            <div className="text-3xl mb-3">📚</div>
                            <h3 className="text-xl font-bold mb-2">Knowledge Base</h3>
                            <p className="mb-4">Upload your FAQs and brand voice so Chatti sounds human and helpful. Pause whenever.</p>
                            <button className="bg-[#ef2d61] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#d42656]">
                              Upload your content →
                            </button>
                          </div>

                          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6">
                            <div className="text-3xl mb-3">🎛️</div>
                            <h3 className="text-xl font-bold mb-2">Smart Moderation</h3>
                            <p className="mb-4">Set "Auto-Hide" rules for trolls, competitors, and spam. Keep your page clean 24/7.</p>
                            <button className="bg-[#ef2d61] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#d42656]">
                              Set your rules →
                            </button>
                          </div>

                          <div className="bg-blue-600 text-white rounded-lg p-6">
                            <div className="text-3xl mb-3">💬</div>
                            <h3 className="text-xl font-bold mb-2">Brand Voice</h3>
                            <p className="mb-4">Define your tone, style, and personality so every reply feels authentically you.</p>
                            <button className="bg-[#ef2d61] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#d42656]">
                              Customize voice →
                            </button>
                          </div>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4">
                          <p className="text-green-800 font-semibold">By the end of this step, your pages will essentially be on autopilot!</p>
                        </div>

                        <p className="mt-6">Best,<br/>The ConversionIQ Team</p>
                      </div>
                    )}

                    {selectedEmail.id === 3 && (
                      <div className="text-gray-800">
                        <p>You have new messages waiting for you on LinkedIn. Stay connected with your professional network.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};
