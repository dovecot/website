<script setup>
import { data as distros } from '../../distros.data.js'
import RhelDistro from './RhelDistro.vue'

const packages = {
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
  <RhelDistro :distros=distros.centos_2_3 :packages=packages.v2_3 latestDir="ce-2.3-latest" family="centos" latestRepo="dovecot-2.3-latest"/>
</template>
