<script setup lang="ts">
import { data as distros } from '../../distros.data.js'
import DebianDistro from './DebianDistro.vue'

const packages = {
  "v2_4": [
    'dovecot-auth-lua',
    'dovecot-core',
    'dovecot-dbg',
    'dovecot-dev',
    'dovecot-flatcurve',
    'dovecot-gssapi',
    'dovecot-imapd',
    'dovecot-ldap',
    'dovecot-lmtpd',
    'dovecot-lua',
    'dovecot-managesieved',
    'dovecot-mysql',
    'dovecot-pgsql',
    'dovecot-pigeonhole-dbg',
    'dovecot-pop3d',
    'dovecot-sieve',
    'dovecot-sieve-dev',
    'dovecot-solr',
    'dovecot-sqlite',
    'dovecot-submissiond',
  ],
  "v2_3": [
    'dovecot-auth-lua',
    'dovecot-core',
    'dovecot-dbg',
    'dovecot-dev',
    'dovecot-gssapi',
    'dovecot-imapd',
    'dovecot-ldap',
    'dovecot-lmtpd',
    'dovecot-lua',
    'dovecot-lucene',
    'dovecot-managesieved',
    'dovecot-mysql',
    'dovecot-pgsql',
    'dovecot-pigeonhole-dbg',
    'dovecot-pop3d',
    'dovecot-sieve',
    'dovecot-sieve-dev',
    'dovecot-solr',
    'dovecot-sqlite',
    'dovecot-submissiond',
  ],
}

</script>
<template>
  <DebianDistro :distros=distros.ubuntu family="ubuntu" :packages=packages.v2_4 latestDir="ce-2.4-latest"/>
  <hr class="m-y-4" />
  <DebianDistro :distros=distros.ubuntu_2_3 family="ubuntu" :packages=packages.v2_3 latestDir="ce-2.3-latest"/>
</template>
