<script setup lang="ts">
import { useData } from 'vitepress'
import Debian from './Debian.vue'
import Rhel from './Rhel.vue'
import Centos from './Centos.vue'
import Ubuntu from './Ubuntu.vue'
import SourcePkg from './SourcePkg.vue'


// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>
<template>
  <div class="hidden">
     <i class="i-heroicons-clipboard-document-check-solid" />
  </div>
  <div class="container h-full w-full max-w-7xl mx-auto">
    <div class="flex items-center text-center w-full">
      <div class="flex-col mx-2">
        <a href="https://dovecot.org">
          <img src="/dovecot.gif" alt="Dovecot" title="Dovecot"/>
        </a>
      </div>
      <!-- /logo -->
      <div class="flex-col mx-4">
        <h1>Dovecot community repositories</h1>
      </div>
    </div>
    <!-- /row -->
    <div class="container bg-gray-200 m-y-8 text-xl p-8 text-justify-left mx-auto rounded">
      <p>
        We provide Debian, Ubuntu and CentOS packages of Dovecot Core and Pigeonhole for community use.
        These packages come with no warranty or assured support.
        If you have problems with these packages please contact our mailing list or IRC channel.
      </p>
      <p>
        You can find pre-built imaptest binary from <a href="https://github.com/dovecot/imaptest">https://github.com/dovecot/imaptest</a>.
      </p>
      <h2>Dovecot 2.4</h2>
      <p>
        All packages are cryptographically signed with a PGP key at <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4</a>.
        You are also encouraged to use https instead of http in repository URLs where supported.
        </p>
      <p>
        To get specific release, replace <samp>ce-2.4-latest</samp> with <samp>ce-&lt;version&gt;</samp>,
        for example <samp>ce-2.4.0</samp>.
        </p>
      <h2>Dovecot 2.3</h2>
      <p>
        All packages are cryptographically signed with a PGP key at <a href="https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3">https://repo.dovecot.org/DOVECOT-REPO-GPG-2.3</a>.
        You are also encouraged to use https instead of http in repository URLs where supported.
        </p>
      <p>
        To get specific release, replace <samp>ce-2.3-latest</samp> with <samp>ce-&lt;version&gt;</samp>,
        for example <samp>ce-2.3.0</samp>.
        </p>
      <h2>Docker</h2>
      <p>
        We also provide Docker images on <a href="https://hub.docker.com/r/dovecot/dovecot">Docker Hub</a>.
      </p>
    </div>
    <div class="container p-8 mx-auto">
      <ul class="list-none nav">
        <li class="mb-4">
          <p class="title mb-2">
            <a data-toggle="collapse" data-target="#rc" class="nolink" href="#rc">Release candidates<i class="i-heroicons-chevron-right-solid"></i></a>
          </p>
          <div id="rc" class="mx-4 tabpanel expanded" role="tabpanel">
            <h3>Generic instructions</h3>
            <p class="text">
                  For release candidates, follow instructions for the given distribution,
                  but replace the repository location to point into <a href="https://repo.dovecot.org/rc/">https://repo.dovecot.org/rc/</a>.
                  Please check the location for available release candidates.
                  </p>
          </div>
        </li>
        <li class="mb-4">
          <p class="title mb-2">
            <a data-toggle="collapse" data-target="#debian" class="nolink" href="#debian">Debian packages<i class="i-heroicons-chevron-right-solid"></i></a>
          </p>
          <div id="debian" class="mx-4 tabpanel expanded" role="tabpanel">
            <Debian/>
          </div>
        </li>
        <li class="mb-4">
          <p class="title mb-2">
            <a data-toggle="collapse" data-target="#rhel" class="nolink" href="#rhel">Red Hat Enterprise Linux packages<i class="i-heroicons-chevron-right-solid"></i></a>
          </p>
          <div id="rhel" class="mx-4 tabpanel expanded" role="tabpanel">
            <Rhel/>
          </div>
        </li>
        <li class="mb-4">
          <p class="title mb-2">
            <a data-toggle="collapse" data-target="#centos" class="nolink" href="#centos">CentOS packages<i class="i-heroicons-chevron-right-solid"></i></a>
          </p>
          <div id="centos" class="mx-4 tabpanel expanded" role="tabpanel">
            <Centos/>
          </div>
        </li>
        <li class="mb-4">
          <p class="title mb-2">
            <a data-toggle="collapse" data-target="#ubuntu" class="nolink" href="#ubuntu">Ubuntu packages<i class="i-heroicons-chevron-right-solid"></i></a>
          </p>
          <div id="ubuntu" class="mx-4 tabpanel expanded" role="tabpanel">
            <Ubuntu/>
          </div>
        </li>
        <li class="mb-4">
          <p class="title mb-2">
            <a data-toggle="collapse" data-target="#source" class="nolink" href="#source">Source tarballs<i class="i-heroicons-chevron-right-solid"></i></a>
          </p>
          <div id="source" class="mx-4 tabpanel expanded" role="tabpanel">
            <SourcePkg/>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

