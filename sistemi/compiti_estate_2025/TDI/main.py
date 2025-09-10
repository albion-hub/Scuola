import webview
from utils.TDI import TDI


api = TDI()

webview.create_window("Interfaccia Router", "GUI/index.html", js_api=api)
webview.start()
