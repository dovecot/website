<script setup>
  const props = defineProps(['distros', 'family', 'packages', 'latestDir'])
</script>
<template>
  <div v-for="distro in props.distros">
    <h3 class="text-bold">{{ distro.title }}</h3>
    <p class="warning" v-if="distro.dovecot_version != 'latest'">
      <b>Last released version is {{ distro.dovecot_version }}</b>
    </p>
    <div v-if="distro.keyring">
    <p>Create <code>/usr/share/keyrings/dovecot.gpg</code></p>
    <div class="container copy-container"><pre><code>curl <a target="blank" :href="`https://repo.dovecot.org/${distro.signed_by}`">https://repo.dovecot.org/{{ distro.signed_by }}</a> | gpg --dearmor -o /usr/share/keyrings/dovecot.gpg</code></pre></div>
    </div>
    <div v-else>
    <p>Create <code>/etc/apt/trusted.gpg.d/dovecot.gpg</code></p>
    <div class="container copy-container"><pre><code>curl <a target="blank":href="`https://repo.dovecot.org/${distro.signed_by}`">https://repo.dovecot.org/{{ distro.signed_by }}</a> | gpg --dearmor -o /etc/apt/trusted.gpg.d/dovecot.gpg</code></pre></div>
    </div>
    <div v-if="distro.format == 'list'">
      <p>Create <code>/etc/apt/sources.list.d/dovecot.list</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>
      <div class="container copy-container"><pre v-if="distro.dovecot_version == 'latest'"><code>deb [signed-by=/usr/share/keyrings/dovecot.gpg] <a target="_blank" :href="`https://repo.dovecot.org/${props.latestDir}/${family}/${distro.codename}`">https://repo.dovecot.org/{{ props.latestDir}}/{{ family }}/{{ distro.codename }}</a> {{distro.codename}} main</code></pre>
        <pre v-else><code>deb [signed-by=/usr/share/keyrings/dovecot.gpg] <a target="_blank" :href="`https://repo.dovecot.org/ce-${distro.dovecot_version}/${family}/${distro.codename}`">https://repo.dovecot.org/ce-{{ distro.dovecot_version }}/{{ family }}/{{ distro.codename }}</a> {{distro.codename}} main</code></pre></div>
    </div>
    <div v-if="distro.format == 'sources'">
      <p>Create <code>/etc/apt/sources.list.d/dovecot.sources</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>

      <div class="container copy-container"><pre><code v-if="distro.dovecot_version == 'latest'">Types: deb
URIs: https://repo.dovecot.org/{{ props.latestDir }}
Suites: {{ distro.codename }}
Components: main
Signed-By: /usr/share/keyrings/dovecot.gpg</code><code v-else>
Types: deb
URIs: https://repo.dovecot.org/ce-{{ distro.dovecot_version }}
Suites: {{ distro.codename }}
Components: main
Signed-By: /usr/share/keyrings/dovecot.gpg</code></pre></div>
  </div>
  </div>
  <h3>Instructions</h3>
  <div>
    <p>If you are upgrading from existing installation, run</p>
    <div class="container copy-container"><pre><code>apt update
apt upgrade</code></pre></div>
    <p>If you are installing new installation, you can use following package names</p>
    <ul class="list-disc-inside">
      <li v-for="pkgName in props.packages" class="list-item">{{ pkgName }}</li>
    </ul>
  </div>
</template>
