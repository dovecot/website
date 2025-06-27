<template>
  <h4>CentOS 7 &amp; 8</h4>
  <p class="warning">
    <b>Last released version for CentOS 8 is 2.3.17</b>
  </p>
  <p>Create <code>/etc/yum.repos.d/dovecot.repo</code></p>
  <pre>
    <code>[dovecot-2.3-latest]
name=Dovecot 2.3 CentOS $releasever - $basearch
baseurl=http://repo.dovecot.org/ce-2.3.17/centos/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3
gpgcheck=1
enabled=1</code>
  </pre>
  <p>If you are upgrading an existing installation</p>
  <pre>
    <code>yum makecache
yum update</code>
  </pre>
  <p>If you are installing new installation, you can use following package names</p>
  <ul>
    <li>dovecot</li>
    <li>dovecot-debuginfo</li>
    <li>dovecot-devel</li>
    <li>dovecot-imaptest</li>
    <li>dovecot-imaptest-debuginfo</li>
    <li>dovecot-lua</li>
    <li>dovecot-mysql</li>
    <li>dovecot-pgsql</li>
    <li>dovecot-pigeonhole</li>
    <li>dovecot-pigeonhole-debuginfo</li>
    <li>dovecot-pigeonhole-devel</li>
  </ul>
  <h4>CentOS 6</h4>
  <p class="warning">
    <b>Last released version is 2.3.11</b>
  </p>
  <p>Create <code>/etc/yum.repos.d/dovecot.repo</code></p>
  <pre>
    <code>[dovecot-2.3.11]
name=Dovecot 2.3 CentOS $releasever - $basearch
baseurl=http://repo.dovecot.org/ce-2.3.11/centos/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3
gpgcheck=1
enabled=1</code>
  </pre>
  <p>If you are upgrading an existing installation</p>
  <pre>
    <code>yum makecache
yum update</code></pre>
  <p>If you are installing new installation, you can use following package names</p>
  <ul>
    <li>dovecot</li>
    <li>dovecot-debuginfo</li>
    <li>dovecot-devel</li>
    <li>dovecot-imaptest</li>
    <li>dovecot-imaptest-debuginfo</li>
    <li>dovecot-lua</li>
    <li>dovecot-mysql</li>
    <li>dovecot-pgsql</li>
    <li>dovecot-pigeonhole</li>
    <li>dovecot-pigeonhole-debuginfo</li>
    <li>dovecot-pigeonhole-devel</li>
  </ul>
</template>
