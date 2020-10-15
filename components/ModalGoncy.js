import ReactDOM from "react-dom"

export default function ModalGoncy({ children, onClose }) { 
  React.useEffect(() => {
    if (process.browser) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "inherit";
    }
  }, [])

  return process.browser ? ReactDOM.createPortal(
      <div className="modalgoncy p-0 lg:p-20 xl:p-25">
        <div onClick={onClose} style={{position: 'absolute', left: 0, top: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.2)'}}></div>
        <div style={{zIndex: 1001, padding: '0 24px', position: 'relative'}}>
        <div style={{backgroundColor: 'white', padding: 4, borderRadius: 4, position: 'absolute', right: 45, top: 24, zIndex: 1001}} onClick={onClose}>X</div>
        <div style={{ padding: 12, backgroundColor: 'white', borderRadius: 4, boxShadow: '0 0 3px rgba(0,0,0,0.5)'}}>
          {children}
        </div>
        </div>
      </div>,
      document.getElementById('modalgoncy')
  ) : null
}