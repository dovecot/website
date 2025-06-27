<script setup>
import { data as distros } from '../../distros.data.js'
import RhelDistro from './RhelDistro.vue'

const packages = {
  "v2_4": [
    'dovecot',
    'dovecot-devel',
    'dovecot-flatcurve',
    'dovecot-gssapi',
    'dovecot-imapd',
    'dovecot-ldap',
    'dovecot-lmtpd',
    'dovecot-lua',
    'dovecot-managesieved',
    'dovecot-mysql',
    'dovecot-pgsql',
    'dovecot-pop3d',
    'dovecot-sieve',
    'dovecot-sieve-devel',
    'dovecot-solr',
    'dovecot-sqlite',
    'dovecot-submissiond',
  ],
  "v2_3": [
    'dovecot',
    'dovecot-devel',
    'dovecot-imaptest',
    'dovecot-lua',
    'dovecot-mysql',
    'dovecot-pgsql',
    'dovecot-pigeonhole',
    'dovecot-pigeonhole-devel',
 ],
}
</script>

<template>
  <RhelDistro :distros=distros.redhat :packages=packages.v2_4 latestDir="ce-2.4-latest" family="rhel" latestRepo="dovecot-2.4-latest"/>
  <hr class="m-y-4" />
  <RhelDistro :distros=distros.redhat_2_3 :packages=packages.v2_3 latestDir="ce-2.3-latest" family="rhel" latestRepo="dovecot-2.3-latest"/>
</template>
