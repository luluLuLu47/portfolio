export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] py-10 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">联系方式</h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>邮箱：<a href="mailto:liamlx@outlook.com" className="hover:text-[#4a6fa5] transition-colors">liamlx@outlook.com</a></li>
              <li>电话：19181776212</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">相关链接</h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li>
                GitHub：
                <a
                  href="https://github.com/luluLuLu47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4a6fa5] transition-colors"
                >
                  github.com/luluLuLu47
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 text-center">
          <p className="text-[10px] text-gray-400">
            © 2026 李彩霞 · AI 产品助理作品集 · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
