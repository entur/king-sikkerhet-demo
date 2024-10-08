import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Could not find root element')
}
const root = createRoot(rootElement)

root.render(
  <div>
    <p>Hey</p>
  </div>
)
