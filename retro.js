
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
    case 'geojson.io':
    case 'localhost':
    case 'meet.google.com':
    case 'meet.jit.si':
    case 'stackoverflow.com':
    case 'vpn.mi-c3.com':
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
          background-color: #302745 !important;
          color: #bac !important;
        }
      `)
      break
    case 'github.com':
      applyStyle(`
        /* user home */
        .js-header-wrapper {
          background-color: #222 !important;
          color: #bbb !important;
        }
        .bg-gray, .application-main  {
          background-color: #333 !important;
          color: #bbb !important;
        }
        .Box, .bg-white  {
          background-color: #2a2a2a !important;
          color: #bbb !important;
        }
        .text-gray {
          color: #ddd !important;
        }
        a, .link-gray, .link-gray-dark {
          color: #d66 !important;
        }
        input {
          background-color: #444 !important;
        }
        /* when you open a repo */
        * {
          background-color: transparent !important;
          color: inherit !important;
        }
        body {
          background-color: #333 !important;
          color: #bbb !important;
        }
        div.pagehead {
          background-color: #222 !important;
        }
        .btn {
          background-image: linear-gradient(-180deg, #622,#311) !important;
        }
        .btn-primary {
          background-image: linear-gradient(-180deg, #d33,#311) !important;
        }
        .link-gray, .text-gray-dark {
          color: #b99 !important;
        }
        nav, span.bg-gray-light {
          background-color: #311 !important;
        }
      `)
      break
    case 'gitlab.mi-c3.com':
      applyStyle(`
        * {
          background-color: inherit !important;
          color: inherit !important;
        }
        html {
          margin-top: -42px !important;
          overflow: overlay !important;
        }
        body {
          background-color: #333 !important;
          color: #bbb !important;
          filter: grayscale(0.3)
        }
        div.item-body {
          background-color: #222 !important;
          color: #ccc !important;
        }
        header {
          background-color: #111 !important;
          color: #ddd !important;
        }
        div.nav-sidebar {
          max-height: calc(100vh - 40px) !important;
        }
        .gl-label {
          background-color: #111 !important;
          color: #ddd !important;
        }
        a {
          color: #dbb !important;
        }
      `)
      break
    case 'web.whatsapp.com':
      applyStyle(`
        * {
          background-color: transparent !important;
          color: inherit !important;
        }
        header {
          background-color: #151515 !important;
        }
        div.app {
          background-color: #222 !important;
          background-image: none !important;
          color: #aaa !important;
        }
        div.focusable-list-item {
          background-color: #333 !important;
        }
        div.app-wrapper-web {
          background-color: #322039 !important;
        }
        div::after {
          background-color: #43314a !important;
        }
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
