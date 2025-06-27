<template>
  <!-- versions -->
  <h4>Noble (24.04 LTS)</h4>
  <p>Create <code>/usr/share/keyrings/dovecot.gpg</code></p>
  <pre><code>curl <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4</a> | gpg --dearmor -o /usr/share/keyrings/dovecot.gpg</code></pre>
  <p>Create <code>/etc/apt/sources.list.d/dovecot.list</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>
  <pre><code>deb [signed-by=/usr/share/keyrings/dovecot.gpg] <a href="https://repo.dovecot.org/ce-2.4-latest/ubuntu/noble">https://repo.dovecot.org/ce-2.4-latest/ubuntu/noble</a> noble main</code></pre>
  <h4>Jammy (22.04 LTS)</h4>
  <p>Create <code>/usr/share/keyrings/dovecot.gpg</code></p>
  <pre><code>curl <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4</a> | gpg --dearmor -o /usr/share/keyrings/dovecot.gpg</code></pre>
  <p>Create <code>/etc/apt/sources.list.d/dovecot.list</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>
  <pre><code>deb [signed-by=/usr/share/keyrings/dovecot.gpg] <a href="https://repo.dovecot.org/ce-2.4-latest/ubuntu/jammy">https://repo.dovecot.org/ce-2.4-latest/ubuntu/jammy</a> jammy main</code></pre>
  <h4>Instructions</h4>
  <p>If you are upgrading from existing installation, run</p>
  <pre><code>apt update
apt upgrade</code></pre>
  <p>If you are installing new installation, you can use following package names</p>
  <ul>
    <li>dovecot-auth-lua</li>
    <li>dovecot-core</li>
    <li>dovecot-dbg</li>
    <li>dovecot-dev</li>
    <li>dovecot-flatcurve</li>
    <li>dovecot-gssapi</li>
    <li>dovecot-imapd</li>
    <li>dovecot-ldap</li>
    <li>dovecot-lmtpd</li>
    <li>dovecot-lua</li>
    <li>dovecot-managesieved</li>
    <li>dovecot-mysql</li>
    <li>dovecot-pgsql</li>
    <li>dovecot-pigeonhole-dbg</li>
    <li>dovecot-pop3d</li>
    <li>dovecot-sieve</li>
    <li>dovecot-sieve-dev</li>
    <li>dovecot-solr</li>
    <li>dovecot-sqlite</li>
    <li>dovecot-submissiond</li>
  </ul>
  <h4>Focal (20.04 LTS)</h4>
  <p class="warning">
    <b>Last supported version of Focal is 2.3.21.1</b>
  </p>
  <p>Create <code>/etc/apt/keyrings/dovecot.gpg</code></p>
  <pre><code>mkdir -p /etc/apt/keyrings; curl <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3</a> | gpg --import
gpg --export ED409DA1 &gt; /etc/apt/keyrings/dovecot.gpg</code></pre>
  <p>Create <code>/etc/apt/sources.list.d/dovecot.list</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>
  <pre><code>deb [signed-by=/etc/apt/keyrings/dovecot.gpg] <a href="https://repo.dovecot.org/ce-2.3-latest/ubuntu/focal">https://repo.dovecot.org/ce-2.3-latest/ubuntu/focal</a> focal main</code></pre>
  <h4>Bionic (18.04 LTS)</h4>
  <p class="warning">
    <b>Last supported version of Focal is 2.3.21.1</b>
  </p>
  <p>Create <code>/etc/apt/keyrings/dovecot.gpg</code></p>
  <pre><code>mkdir -p /etc/apt/keyrings; curl <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3</a> | gpg --import
gpg --export ED409DA1 &gt; /etc/apt/keyrings/dovecot.gpg</code></pre>
  <p>Create <code>/etc/apt/sources.list.d/dovecot.list</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>
  <pre><code>deb [signed-by=/etc/apt/keyrings/dovecot.gpg] <a href="https://repo.dovecot.org/ce-2.3-latest/ubuntu/bionic">https://repo.dovecot.org/ce-2.3-latest/ubuntu/bionic</a> bionic main</code></pre>
  <h4>Xenial (16.04 LTS)</h4>
  <p class="warning">
    <b>Last released version is 2.3.11.3</b>
  </p>
  <p>Create <code>/etc/apt/trusted.gpg.d/dovecot.gpg</code></p>
  <pre><code>curl <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3</a> | gpg --import
gpg --export ED409DA1 &gt; /etc/apt/trusted.gpg.d/dovecot.gpg</code></pre>
  <p>Create <code>/etc/apt/sources.list.d/dovecot.list</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>
  <pre><code>deb <a href="https://repo.dovecot.org/ce-2.3-latest/ubuntu/xenial">https://repo.dovecot.org/ce-2.3.11.3/ubuntu/xenial</a> xenial main</code></pre>
  <h4>Trusty (14.04 LTS)</h4>
  <p class="warning">
    <b>Last released version is 2.3.8</b>
  </p>
  <p>Create <code>/etc/apt/trusted.gpg.d/dovecot.gpg</code></p>
  <pre><code>curl <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3</a> | gpg --import
gpg --export ED409DA1 &gt; /etc/apt/trusted.gpg.d/dovecot.gpg</code></pre>
  <p>Create <code>/etc/apt/sources.list.d/dovecot.list</code>. If you want to use https, make sure you have installed <code>apt-transport-https</code>.</p>
  <pre><code>deb <a href="https://repo.dovecot.org/ce-2.3.8/ubuntu/trusty">https://repo.dovecot.org/ce-2.3.8/ubuntu/trusty</a> trusty main</code></pre>
  <!-- end of versions -->
  <h4>Instructions</h4>
  <p>If you are upgrading from existing installation, run</p>
  <pre><code>apt update
apt upgrade</code></pre>
  <p>If you are installing new installation, you can use following package names</p>
  <ul>
    <li>dovecot-core</li>
    <li>dovecot-dbg</li>
    <li>dovecot-dev</li>
    <li>dovecot-gssapi</li>
    <li>dovecot-imapd</li>
    <li>dovecot-imaptest</li>
    <li>dovecot-ldap</li>
    <li>dovecot-lmtpd</li>
    <li>dovecot-lua</li>
    <li>dovecot-lucene</li>
    <li>dovecot-managesieved</li>
    <li>dovecot-mysql</li>
    <li>dovecot-pgsql</li>
    <li>dovecot-pigeonhole-dbg</li>
    <li>dovecot-pop3d</li>
    <li>dovecot-sieve-dev</li>
    <li>dovecot-sieve</li>
    <li>dovecot-solr</li>
    <li>dovecot-sqlite</li>
    <li>dovecot-submissiond</li>
  </ul>
</template>
