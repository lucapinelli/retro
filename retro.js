
(() => {

  const id = '76f6449c-2ac6-46b5-8490-f6ad4c2f3341'

  const applyStyle = (css) => {
    let node = document.getElementById(id)
    if (!node) {
      node = document.createElement('style')
      node.id = id
      document.body.appendChild(node)
    }
    node.innerHTML = css
  }

  // const removeStyle = () => {
  //   const node = document.getElementById(id)
  //   node && document.body.removeChild(node)
  // }

  // document.location.host === 'translate.google.com'
  switch (document.location.hostname) {
    case 'docs.google.com':
    case 'drive.google.com':
    case 'duckduckgo.com':
    case 'gitlab.mi-c3.com':
    case 'localhost':
    case 'meet.google.com':
    case 'stackoverflow.com':
      if (document.location.pathname === '/graphiql') {
        applyStyle(`
          body { filter: invert(82%); }
          img { filter: invert(82%); }
        `)
      }
      break
    case 'www.youtube.com':
    case 'chat.affectli.com':
      applyStyle(`
        * {
          background-color: #222 !important;
          color: #999 !important;
        }
      `)
      break
    case 'mail.google.com':
      applyStyle(`
        * {
          background-color: #484059 !important;
          color: #ccc !important;
        }
      `)
      break
    case 'web.whatsapp.com':
      applyStyle(`
        body { filter: invert(82%); }
        img { filter: invert(82%); }
      `)
      break
    case 'translate.google.com':
      applyStyle(`
        body { filter: invert(82%); }
        div.frame { background-color: white; }
      `)
      break
    default:

      applyStyle(`
        * {
          background-color: #333 !important;
          color: #ccc !important;
        }
        body { filter: grayscale(80%); }
      `)
  }

})()
