
![ansible](https://imgs.search.brave.com/KJheLGzl3UHJ8ne5KyJSEr_RfwipOtzWSf0juMIAK3s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXRh/c2NpZW50ZXN0LmNv/bS9lcy93cC1jb250/ZW50L3VwbG9hZHMv/c2l0ZXMvNy8yMDIz/LzA1L2Fuc2libGUu/cG5nLmpwZw)

> # ANSIBLE
---

### INTRODUCTION AND LINKS
## DESCRIPTION
Ansible is a software tool that provides simple but powerful automation for cross-platform computer support. It is primarily intended for IT professionals, who use it for application deployment, updates on workstations and servers, cloud provisioning, configuration management, intra-service orchestration, and nearly anything a systems administrator does on a weekly or daily basis. Ansible doesn't depend on agent software and has no additional security infrastructure, so it's easy to deploy.
LINKS
- Home Page
- Docs


## ANSIBLE COMMANDS
```
ansible all --list-hosts  - Listar todos los "hosts" disponibles
ansible all -m ping - Hacer Ping a los hosts
ansible (all o nombre del host,ip ...) -m gather_facts - Obtener información de los hosts.
ansible (all o nombre del host,ip ...) -m shell -a "ls -l"
 # Ejecutar comando en los hosts.
 ```


