<template>
  <h4>RHEL 9</h4>
  <p>Create <code>/etc/yum.repos.d/dovecot.repo</code></p>
  <pre><code>[dovecot-2.4-latest]
name=Dovecot 2.4 RHEL $releasever - $basearch
baseurl=http://repo.dovecot.org/ce-2.4-latest/rhel/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4
gpgcheck=1
enabled=1</code></pre>
  <h4>RHEL 8 with Dovecot 2.4</h4>
  <p>Create <code>/etc/yum.repos.d/dovecot.repo</code></p>
  <pre><code>[dovecot-2.4-latest]
name=Dovecot 2.4 RHEL $releasever - $basearch
baseurl=http://repo.dovecot.org/ce-2.4-latest/rhel/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4
gpgcheck=1
enabled=1</code></pre>
  <h4>Instructions</h4>
  <p>If you are upgrading an existing installation</p>
  <pre><code>yum makecache
yum update</code></pre>
  <p>If you are installing new installation, you can use following package names</p>
  <ul>
    <li>dovecot</li>
    <li>dovecot-devel</li>
    <li>dovecot-flatcurve</li>
    <li>dovecot-gssapi</li>
    <li>dovecot-imapd</li>
    <li>dovecot-ldap</li>
    <li>dovecot-lmtpd</li>
    <li>dovecot-lua</li>
    <li>dovecot-managesieved</li>
    <li>dovecot-mysql</li>
    <li>dovecot-pgsql</li>
    <li>dovecot-pop3d</li>
    <li>dovecot-sieve-devel</li>
    <li>dovecot-sieve</li>
    <li>dovecot-solr</li>
    <li>dovecot-sqlite</li>
    <li>dovecot-submissiond</li>
    <li>dovecot</li>
  </ul>
  <h4>RHEL 8 with Dovecot 2.3</h4>
  <p>Create <code>/etc/yum.repos.d/dovecot.repo</code></p>
  <pre><code>[dovecot-2.3-latest]
name=Dovecot 2.3 RHEL $releasever - $basearch
baseurl=http://repo.dovecot.org/ce-2.3-latest/rhel/$releasever/RPMS/$basearch
gpgkey=https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3
gpgcheck=1
enabled=1
  </code></pre>
  <p>If you are upgrading an existing installation</p>
  <pre><code>yum makecache
yum update
  </code></pre>
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
