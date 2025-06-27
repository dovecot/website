<script setup>
  const props = defineProps(['distros', 'packages', 'latestDir', 'latestRepo', 'family'])
</script>

<template>
  <div v-for="distro in props.distros">
    <h3>{{ distro.title }}</h3>
    <p class="warning" v-if="distro.dovecot_version != 'latest'">
      <b>Last released version is {{ distro.dovecot_version }}</b>
    </p>
    <p>Create <code>/etc/yum.repos.d/dovecot.repo</code></p>
    <div class="container copy-container"><pre v-if="distro.dovecot_version == 'latest'"><code>[{{ latestRepo }}]
name=Dovecot 2.4 {{ family.toUpperCase() }} $releasever - $basearch
baseurl=http://repo.dovecot.org/{{ latestDir }}/{{ family }}/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/{{ distro.signed_by }}
gpgcheck=1
enabled=1</code></pre>
    <pre v-else><code>[dovecot-{{ distro.dovecot_version }}]
name=Dovecot {{ distro.dovecot_version }} {{ family.toUpperCase() }} $releasever - $basearch
baseurl=http://repo.dovecot.org/ce-{{ distro.dovecot_version }}/{{ family }}/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/{{ distro.signed_by }}
gpgcheck=1
enabled=1</code></pre></div>
  </div>
  <h3>Instructions</h3>
  <div>
    <p>If you are upgrading an existing installation</p>
    <div class="container copy-container"><pre><code>yum makecache
yum update</code></pre></div>
    <p>If you are installing new installation, you can use following package names</p>
    <ul class="list-disc-inside">
      <li v-for="pkgName in props.packages" class="list-item">{{ pkgName }}</li>
    </ul>
  </div>
</template>
