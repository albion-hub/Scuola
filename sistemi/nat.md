## NAT 

### comandi
#### static NAT
- ip nat inside (interfacce private)
- ip nat outside (interfacce publiche)

- ip nat inside source static 10.0.0.10 100.0.0.10   |   ()

- show ip nat translation   |   (mostra la NAT table)

### access list
- ip access-list standard [nome eticheta]
- permit [ip] [well carl]            
- permit host [ip]              
- deny any 

- ip nat inside source list [nome eticheta] interface [int] overload 

### dynamic NAT
- ip nat pool [eticheta] [gruppi ip publici]  netmask [mask]
- ip nat inside source list [eticheta] pool [eticheta] 

### port forwarding 
- ip nat inside source static tcp [inside ip] [port] [ip publico] [outside port]

### Definizione NAT

- cos'è: un servizioni di l7
- dove: sugli IS(router)
- cosa: traducce address mittente o destinatario
- come: con la NAT table 

- ## classificazioni
- SNAT (ip maschereting)
- DNAT (port forwarding)

- ## cisco
- dnat
- snat
- PAT

