import { createRoot } from 'react-dom/client'

// failure, 可能需要一个配置指定入口文件
const dom = document.getElementById('my-app')
const root = createRoot(dom)
root.render(<h2>hello world</h2>)
