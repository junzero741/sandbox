const _ = {
    $: (selector, root=document) => root.querySelector(selector),
    $All : (selector, root=document) => root.querySelectorAll(selector),
    on : (selector, event, func, option) => selector.addEventListenr(event, func, option)
}

export {_};