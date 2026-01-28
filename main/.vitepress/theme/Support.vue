<script setup lang="ts">
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
 <h1 class="text-4xl text-green font-bold m-y-4 text-center">Support</h1>
 <p class="text-xl">
   Please see the various open-source volunteer driven options. When reporting a problem, please remember to first upgrade to latest stable release and see if your problem is reproducible there.
 </p>
 <div class="flex flex-wrap">
	 <div class="w-1/4 px-4 py-2 text-center items-center">
		 <h2 class="text-2xl font-bold m-y-4">
			 <img src="/54444-100x100.jpg" class="mx-auto mb-2 w-auto"/>
			 <br/>Commercial support
		 </h2>
		 <p class="text-xl">
		 Learn more about the commercial version <a href="https://www.dovecotpro.com" class="underline" rel="external" target="_blank">Dovecot Pro</a>, including carrier-grade support.
		 </p>
	 </div>
	 <div class="w-1/4 px-4 py-2 text-center items-center">
		 <h2 class="text-2xl font-bold m-y-4">
			 <img src="/3333-100x100.jpg" class="mx-auto mb-2 w-auto"/>
			 <br/>IRC
		 </h2>
		 <p class="text-xl">
		 You can also contact us over OFTC IRC on channel <a href="irc://irc.oftc.net/#dovecot" class="underline">#dovecot</a>. You need to authenticate with services before you can write to the channel.
		 We encourage you to read <a href="https://workaround.org/getting-help-on-irc" class="underline" rel="external" target="_blank">https://workaround.org/getting-help-on-irc</a> prior asking.
		 </p>
	 </div>
	 <div class="w-1/4 px-4 py-2 text-center items-center">
	 	 <h2 class="text-2xl font-bold m-y-4">
			 <img src="/1111-100x100.jpg" class="mx-auto mb-2 w-auto"/>
			 <br/>Mailing lists
		 </h2>
		 <p class="text-xl">
                 Find detailed information about our <a href="https://dovecot.org/mailman3/mailman3/lists/dovecot.dovecot.org/" class="underline" rel="external" target="_blank">Mailing List</a>. In case of abuse or other techincal issues, contact <a href="mailto:dovecot-owner@dovecot.org" class="underline" rel="external">dovecot-owner@dovecot.org</a> or <a href="https://www.open-xchange.com/contact-us/report-abuse" class="underline" rel="external" target="_blank">Open-Xchange</a>.
		 </p>

	 </div>
	 <div class="w-1/4 px-4 py-2 text-center items-center">
		 <h2 class="text-2xl font-bold m-y-4">
			 <img src="/22222-100x100.jpg" class="mx-auto mb-2 w-auto"/>
			 <br/>Bug reports
		 </h2>
		 <p class="text-xl">
		 Send <a href="https://doc.dovecot.org/main/issues.html" class="underline">bug reports</a> to <a href="https://dovecot.org/mailman3/mailman3/lists/dovecot.dovecot.org/" class="underline" rel="external" target="_blank">Mailing List</a>.
		 </p>

	 </div>
</div>
</template>
