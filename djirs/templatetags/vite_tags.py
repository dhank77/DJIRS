from django import template
from django.conf import settings
from django.utils.safestring import mark_safe

register = template.Library()

@register.simple_tag
def vite_react_refresh():
    vite_host = getattr(settings, 'VITE_HOST', '127.0.0.1')
    vite_port = getattr(settings, 'VITE_PORT', 5173)
    script = f"""
    <script type="module">
        import RefreshRuntime from 'http://{vite_host}:{vite_port}/static/@react-refresh';
        RefreshRuntime.injectIntoGlobalHook(window);
        window.$RefreshReg$ = () => {{}};
        window.$RefreshSig$ = () => (type) => type;
        window.__vite_plugin_react_preamble_installed__ = true;
    </script>
    """

    return mark_safe(script)
