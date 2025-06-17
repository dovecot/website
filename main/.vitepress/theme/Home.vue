<script setup lang="ts">
import { useData } from 'vitepress'
import News from '../components/News.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <section class="space-y-4 text-center flex flex-col uppercase">
    <h1 class="text-6xl font-bold">Dovecot<br/><span class="text-green font-bold">The Secure IMAP server</span></h1>
  </section>

  <hr class="my-12 border-t-2 border-gray-200 w-full mx-auto" />

  <section class="leading-relaxed flex flex-col md:flex-row items-center justify-between gap-8">
    <!-- Text block -->
    <div class="md:w-1/2 space-y-4 text-left">
      <h2 class="text-4xl font-bold">Dovecot Pro</h2>
      <h3 class="text-4xl font-bold">Meet The World’s Leading Email Backend Platform</h3>
      <p class="text-lg">
        Dovecot Pro is a full-service email platform that delivers dynamic scalability, high performance, efficient utilization of hardware, and outstanding support to the world’s largest Telcos, ISP’s, and Hosters.
      </p>
      <p>
        <a href="https://www.dovecotpro.com/" class="inline-block bg-problue uppercase font-bold text-white px-4 py-2 rounded hover:bg-problue transition text-xl">
  Explore Dovecot Pro
        </a>
      </p>
    </div>
  
    <!-- Image block -->
    <div class="md:w-1/2">
      <img src="/Dovecot-BLUE.png" alt="Dovecot features" class="w-full max-w-xl mx-auto" />
    </div>
  </section>

  <hr class="my-12 border-t-2 border-gray-200 w-full mx-auto" />

  <section>
       <News/>
  </section>

  <section class="max-w-8xl mx-auto w-full">
    <div class="space-y-20 w-full">
      <!-- Section Title -->
      <h2 class="text-3xl font-bold text-left justify-left uppercase">Features</h2>
  
      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Left Column: Best Performing -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-rocket-launch-solid text-xl" />
            Best Performing
          </h3>
          <p class="text-lg">
            Dovecot is among the <b>best performing</b> IMAP servers while still supporting the
            <b>standard</b> mbox and
            <a href="https://doc.dovecot.org/main/core/config/mailbox/formats/maildir.html" class="underline">
              Maildir
            </a> formats. The mailboxes are transparently indexed, giving excellent performance and full compatibility.
          </p>
        </div>
  
	<!-- Right Column: Flexible Authentication -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-user-group-solid text-xl" />
            Flexible Authentication
          </h3>
          <p class="text-lg">
            Dovecot’s user authentication is extremely flexible and feature-rich, supporting many different
	    <a class="underline" href="https://doc.dovecot.org/main/core/config/auth/overview.html">authentication databases and mechanisms</a>.
          </p> 
	</div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Left: Standards compliant  -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-clipboard-document-check-solid text-xl" />
	    Standards compliant 
          </h3>
          <p class="text-lg">
	    Dovecot is <b>standards compliant</b>. Dovecot passes all IMAP server standard compliancy tests while most other servers fail many of them.
	  </p>
        </div> 
        <!-- Right: -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-user-solid text-xl" />
	    Postfix, Exim and OpenSMTPD.
          </h3>
          <p class="text-lg">
	    Postfix 2.3+ and Exim 4.64+ users can do SMTP authentication directly against Dovecot’s authentication backend without having to configure it separately.
	    You can also use our submission service to perform authentication before relaying mail to your MTA.
	  </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Left: Self-optimizing -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-circle-stack-solid text-xl" />
	    Self-optimizing
          </h3>
	  <p class="text-lg">
   	    Dovecot’s indexes are <b>self-optimizing</b>. They contain exactly what the user’s client commonly needs, no more and no less.
	  </p>
        </div> 
        <!-- Right: Easy migration -->
        <div class="md:w-1/2 space-y-2 text-left md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-arrow-right-end-on-rectangle-solid text-xl" />
            Easy migration
          </h3>
          <p class="text-lg">
            Dovecot supports <a class="underline" href="https://doc.dovecot.org/main/core/admin/migration.html">easy migration from many existing IMAP and POP3 servers</a>, allowing the change to be transparent to existing users.
	  </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Left: Self healing -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-wrench-screwdriver-solid text-xl" />
	    Self-healing
          </h3>
          <p class="text-lg">
    	    Dovecot is <b>self-healing</b>. It tries to fix most of the problems it notices by itself, such as broken index files. The problems are however logged so the administrator can later try to figure out what caused them.
	  </p>
        </div> 
        <!-- Right: Workarounds support -->
        <div class="md:w-1/2 space-y-2 text-left md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-bug-ant-solid text-xl" />
	      Workarounds support
          </h3>
          <p class="text-lg">
	    Dovecot supports <a class="underline" href="https://doc.dovecot.org/main/core/config/quick.html#client-workarounds">workarounds</a> for several bugs in IMAP and POP3 clients.
	    Since the workarounds may cause the protocol exchange to be sub-optimal, you can enable only the workarounds you need.
	  </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Left:  -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-face-smile-solid text-xl" />
	    Admin friendly
          </h3>
          <p class="text-lg">
 	   Dovecot tries to be <b>admin friendly</b>. Common error messages are made as easily understandable as possible.
	   Any crash, no matter how it happened, is considered a bug that will be fixed.
	  </p>
        </div> 
        <!-- Right: -->
        <div class="md:w-1/2 space-y-2 text-left md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-lock-closed-solid text-xl" />
	    Security
          </h3>
          <p class="text-lg">
	    Dovecot’s design and implementation is highly focused on security.
	    You can report any security vulnerabilities via our <a class="underline" href="https://vdp.open-xchange.com/">YesWeHack program</a>
	    or via email to <a class="underline" href="mailto:security@dovecot.org">security@dovecot.org</a>.
	  </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-start gap-12">
        <!-- Left: Clustered filesystems compatibility -->
        <div class="md:w-1/2 space-y-2 text-center md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-cloud-solid text-xl" />
            Clustered filesystems compatibility		    
          </h3>
          <p class="text-lg">	
            Dovecot allows mailboxes and their indexes to be modified by multiple computers at the same time, while still performing well.
	    This means that Dovecot works well with <b>clustered filesystems</b>.
	    <a class="underline" href="https://doc.dovecot.org/main/core/config/guides/nfs.html">NFS has caching problems</a>, but you can work around them with Dovecot cluster.
	  </p>
        </div> 
        <!-- Right: Easily extensible -->
        <div class="md:w-1/2 space-y-2 text-left md:text-left">
          <h3 class="text-2xl font-semibold flex items-center gap-2 justify-center md:justify-start text-green">
            <i class="i-heroicons-beaker-solid text-xl" />
	    Easily extensible
          </h3>
          <p class="text-lg">
   	     Dovecot is easily extensible. Plugins can add new commands, modify existing behavior, add their own data into index files or even add support for new mailbox formats. For example quota and ACL support are completely implemented as plugins. You can also extend
	     Dovecot functionality with Lua scripts.
	  </p>
        </div>
      </div>
    </div>
  </section>
</template>
