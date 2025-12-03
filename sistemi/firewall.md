## Firewall

- servizio L7

classificazione 
- dove colocato
- firewall personal     | sul host
- firewall perimetrale  | messo sul bastione a gurdia della rete

livelo di controllo
- packet filter
- statefull inspection:     annaliza il tentatovo/(stato) di connesione TCP. 
- Deep Packet Inspection:   annalisi del livello 7 (tutto anche il patload)

- IDS -> Intrusion Detection System
    sistema capace di rileva attività sospette o malevole (npam). (mada notifiche)

- IPS -> Intrusion Prevention System
    Previene e blocca traffico malevolo in tempo reale (mette in atto delle tatiche/strategie per mitigare l'attaco)

- WAF -> Web Application Firewall: 
    Protegge applicazioni web da attacchi specifici (es. SQL injection, XSS, CSRF).
    