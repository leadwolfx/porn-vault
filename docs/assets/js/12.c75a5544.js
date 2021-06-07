(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{372:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-guide"}},[t._v("#")]),t._v(" Docker guide")]),t._v(" "),a("h2",{attrs:{id:"dockerhub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerhub"}},[t._v("#")]),t._v(" Dockerhub")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/repository/docker/boi12321/porn-vault",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/repository/docker/boi12321/porn-vault"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"build-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-image"}},[t._v("#")]),t._v(" Build image")]),t._v(" "),a("p",[t._v("You can build a docker image yourself with the "),a("code",[t._v("Dockerfile")]),t._v(" in the "),a("code",[t._v("docker")]),t._v(' folder. To do this, you must "clone" this git repository or download a zip from Github. Then you can follow one of the steps below.\nIf you want to build using an already built image, the parameters described should still be valid.')]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("WARNING")]),t._v(": the docker context (i.e. where you are running the command from) has to be the root of the repository. You just need to specify the path to the appropriate Dockerfile.")])]),t._v(" "),a("p",[t._v("There is a "),a("code",[t._v("Dockerfile")]),t._v(" in the "),a("code",[t._v("docker")]),t._v(" folder of the repo that allow you to either build an image locally.")]),t._v(" "),a("p",[t._v("Build the image with "),a("code",[t._v("docker build -t porn-vault -f docker/Dockerfile.debian .")])]),t._v(" "),a("h2",{attrs:{id:"docker-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-cli"}},[t._v("#")]),t._v(" docker cli")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("porn-vault "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(":3000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v /etc/localtime:/etc/localtime:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v /porn_vault_config:/config "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v /my_videos:/videos "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v /my_images:/images "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GUID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --device"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/dev/dri/renderD128:/dev/dri/renderD128 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For VAAPI users")]),t._v("\n  --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("porn-vault-net "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When you run Elasticsearch with Docker")]),t._v("\n  --restart unless-stopped "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  porn-vault\n")])])]),a("h2",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" docker-compose")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("porn-vault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" porn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vault\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" porn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vault\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" PUID=1000\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" PGID=1000\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/localtime:/etc/localtime:ro"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/porn_vault_config:/config"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/my_videos:/videos"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/my_images:/images"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3000:3000"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("devices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Only for vaapi users")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /dev/dri/renderD128"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/dev/dri/renderD128\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("stopped\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When you run Elasticsearch with Docker")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" porn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("net\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("porn-vault-net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bridge\n")])])]),a("h2",{attrs:{id:"docker-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-parameters"}},[t._v("#")]),t._v(" Docker parameters")]),t._v(" "),a("p",[t._v("The container requires some parameters for the app to run correctly. These parameters are separated by a colon and indicate "),a("code",[t._v("<external>:<internal>")]),t._v(" respectively. For example, "),a("code",[t._v("-p 8080:3000")]),t._v(" would expose port "),a("code",[t._v("3000")]),t._v(" from inside the container to be accessible from the host's IP on port "),a("code",[t._v("8080")]),t._v(" outside the container.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Parameter")]),t._v(" "),a("th",[t._v("Function")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-p 3000")])]),t._v(" "),a("td",[t._v("The port for the porn-vault webinterface. This must match what is in your config file.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-v /config")])]),t._v(" "),a("td",[t._v("Directory for persistent files (config file, database, backups...). Unless you changed the environment variable "),a("code",[t._v("PV_CONFIG_FOLDER")]),t._v(", it must be exactly this name.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-v /videos")])]),t._v(" "),a("td",[t._v("A directory for the "),a("code",[t._v("import.videos")]),t._v(" config setting. The volume can have whatever path you want such as "),a("code",[t._v("/videos_from_drive_1")]),t._v(" or "),a("code",[t._v("/videos_from_drive_2")]),t._v(" "),a("em",[t._v("as long as you use that path in your config")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-v /images")])]),t._v(" "),a("td",[t._v("A directory for the "),a("code",[t._v("import.images")]),t._v(" config The volume can have whatever path you want such as "),a("code",[t._v("/images_from_drive_1")]),t._v(" or "),a("code",[t._v("/images_from_drive_2")]),t._v(" "),a("em",[t._v("as long as you use that path in your config")]),t._v(".")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-e PUID")])]),t._v(" "),a("td",[t._v("The uid to apply to the container's user")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("-e GUID")])]),t._v(" "),a("td",[t._v("The guid to apply to the container's user")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("--device /dev/dri")])]),t._v(" "),a("td",[t._v("VAAPI devices to mount to /dev/dri inside the container")])])])]),t._v(" "),a("p",[t._v("The 'videos' and 'images' volume paths do not have to be strictly named as such and are not strictly necessary. If you have a folder structure like this:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("my-stuff/\n├── images\n└── videos\n")])])]),a("p",[t._v("You could have a single volume such as "),a("code",[t._v("-v /my-stuff:/root_stuff")]),t._v(" and then use it like this in your config file:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"import"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"videos"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/root_stuff/videos"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"images"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/root_stuff/images"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"integration-with-elasticsearch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integration-with-elasticsearch"}},[t._v("#")]),t._v(" Integration with Elasticsearch")]),t._v(" "),a("p",[t._v("You may run Elasticsearch and Porn-Vault either separately, or in a single docker-compose.yml."),a("br"),t._v("\nTo setup elasticsearch with Docker, please refer to "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("When running both with Docker, you must make sure the Porn-Vault container can access the Elasticsearch container.")]),t._v(" "),a("blockquote",[a("p",[t._v("User-defined bridges provide automatic DNS resolution between containers.\nContainers on the default bridge network can only access each other by IP addresses, unless you use the --link option, which is considered legacy. On a user-defined bridge network, containers can resolve each other by name or alias.")])]),t._v(" "),a("p",[t._v("Create a new docker network using the "),a("code",[t._v("bridge")]),t._v(" driver.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cli")]),t._v("\ndocker network create -d bridge porn-vault-net\ndocker run --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("porn-vault-net --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("porn-vault\n")])])]),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker-compose.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("porn-vault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" porn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("vault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("net\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("porn-vault-net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bridge\n")])])]),a("p",[t._v("Then in your config, you may set "),a("code",[t._v("search.host")]),t._v(" to "),a("code",[t._v("http://<name_of_es_container>:9200")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"search"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://elasticsearch:9200"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"user-group-identifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-group-identifiers"}},[t._v("#")]),t._v(" User / Group identifiers")]),t._v(" "),a("p",[t._v("When using volumes ("),a("code",[t._v("-v")]),t._v(" flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user "),a("code",[t._v("PUID")]),t._v(" and group "),a("code",[t._v("PGID")]),t._v(".")]),t._v(" "),a("p",[t._v("Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic.")]),t._v(" "),a("p",[t._v("In this instance "),a("code",[t._v("PUID=1000")]),t._v(" and "),a("code",[t._v("PGID=1000")]),t._v(", to find yours use "),a("code",[t._v("id user")]),t._v(" as below:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" username\n  "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dockeruser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dockergroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("groups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dockergroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"hardware-acceleration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-acceleration"}},[t._v("#")]),t._v(" Hardware acceleration")]),t._v(" "),a("h3",{attrs:{id:"vaapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vaapi"}},[t._v("#")]),t._v(" VAAPI")]),t._v(" "),a("p",[t._v("To use VAAPI hardware acceleration, you must mount your "),a("code",[t._v("/dev/dri")]),t._v(" device inside the container:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("--device=/dev/dri/renderD128:/dev/dri/renderD128\n")])])]),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("ul",[a("li",[t._v("When using Docker, the "),a("code",[t._v("binaries.ffmpeg")]),t._v(" & "),a("code",[t._v("binaries.ffprobe")]),t._v(" paths in the config must be valid, otherwise the program will exit. The images should already have ffmpeg installed and thus use the following default paths:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"binaries"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ffmpeg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin/ffmpeg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ffprobe"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/bin/ffprobe"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("By default, the images set the environment variable "),a("code",[t._v("PV_CONFIG_FOLDER=/config")]),t._v(", and create a volume for "),a("code",[t._v("/config")]),t._v(". Otherwise, you may run into permission or persistence issues.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);