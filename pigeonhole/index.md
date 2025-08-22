## Overview

Pigeonhole is the name of the project that adds support for the [Sieve language](http://www.sieve.info) ([RFC 5228](http://tools.ietf.org/html/rfc5228/)) and the [ManageSieve protocol](http://tools.ietf.org/html/rfc5804) ([RFC 5804](http://tools.ietf.org/html/rfc5804)) to the [Dovecot Secure IMAP Server](http://www.dovecot.org/). In the literal sense, [a pigeonhole](https://en.wiktionary.org/wiki/pigeonhole) is a a hole or recess inside a dovecot for pigeons to nest in. It is, however, also the name for one of a series of small, open compartments in a cabinet used for filing or sorting mail. As a verb, it describes the act of putting an item into one of those pigeonholes. The name \`Pigeonhole\' therefore well describes an important part of the functionality that this project adds to Dovecot: sorting and filing e-mail messages.

The Sieve language is used to specify how e-mail needs to be processed. By writing Sieve scripts, users can customize how messages are delivered, e.g. whether they are forwarded or stored in special folders. Unwanted messages can be discarded or rejected, and, when the user is not available, the Sieve interpreter can send an automated reply. Above all, the Sieve language is meant to be simple, extensible and system independent. And, unlike most other mail filtering script languages, it does not allow users to execute arbitrary programs. This is particularly useful to prevent virtual users from having full access to the mail store. The intention of the language is to make it impossible for users to do anything more complex (and dangerous) than write simple mail filters.

Using the ManageSieve protocol, users can upload their Sieve scripts remotely, without needing direct filesystem access through FTP or SCP. Additionally, a ManageSieve server always makes sure that uploaded scripts are valid, preventing compile failures at mail delivery.

The Pigeonhole project provides Sieve support as a plugin to Dovecot\'s Local Delivery Agent (LDA). The ManageSieve protocol is provided is an additional service, next to Dovecot\'s own POP3 and IMAP services.

## Features

-   The Pigeonhole Sieve implementation aims to be **admin- and user-friendly**. Much like Dovecot, common error messages are made as easily understandable as possible. Any crash, no matter how it happened, is considered a bug that will be fixed. The compiler does not bail on the first error, but it looks for more script errors to make debugging more efficient.
-   The Pigeonhole Sieve implementation is, much like the language itself, **highly extensible** with new Sieve capabilities. This includes support for third-party plugins. It should eventually provide the necessary infrastructure for at least all currently known relevant (proposed) Sieve extensions. The goal is to keep the extension interface provided by the Sieve implementation as generic as possible, i.e. without explicit support for specific extensions. New similar extensions can then use the same interface methods without changes to the Sieve engine code. If an extension is not loaded using the require command, the compiler truly does not know of its existence.
-   The Pigeonhole Sieve plugin is **backwards compatible** with the old CMUSieve plugin. All Sieve extensions supported by the old plugin are also supported by the Pigeonhole Sieve plugin, including those that are now considered to be deprecated.
-   The Pigeonhole Sieve implementation **supports executing multiple Sieve scripts sequentially**. Using this feature it is possible to execute administrator-controlled Sieve scripts before and after the user\'s personal Sieve script, guaranteeing that responses and message deliveries are never duplicated. This implementation is based on a [draft specification](http://tools.ietf.org/html/draft-degener-sieve-multiscript-00), which defines the Sieve behavior when multiple scripts are executed sequentially on the same message.
-   The Pigeonhole Sieve implementation includes a **test suite** to automatically assess whether the compiled Sieve engine works correctly. The test suite is an extension to the Sieve language and is therefore easily extended with new tests. Currently, the test suite is mostly limited to testing script processing. The performed actions are not tested fully yet.
-   The Pigeonhole Sieve implementation supports the new and very useful variables extension.
-   The Pigeonhole Sieve plugin is distributed with a sieve-test tool that simplifies testing Sieve scripts and provides additional debugging facilities.

## Status

### Sieve

-   The core of the language (as specified in [RFC 5228](http://tools.ietf.org/html/rfc5228/)) is fully supported, including the language extensions defined in the base specification:

    -   **encoded-character** ([RFC 5228; Section 2.4.2.4](http://tools.ietf.org/html/rfc5228#section-2.4.2.4))
    -   **fileinto** ([RFC 5228; Section 4.1](http://tools.ietf.org/html/rfc5228#section-4.1))
    -   **envelope** ([RFC 5228; Section 5.4](http://tools.ietf.org/html/rfc5228#section-5.4))

-   The following Sieve language extensions are also supported:

    -   **copy** ([RFC 3894](http://tools.ietf.org/html/rfc3894/)): fully supported.
    -   **body** ([RFC 5173](http://tools.ietf.org/html/rfc5173/)): almost fully supported, but the text body-transform implementation is simple.
    -   **environment** ([RFC 5183](http://tools.ietf.org/html/rfc5183/)): fully supported (v0.4.0+).
    -   **variables** ([RFC 5229](http://tools.ietf.org/html/rfc5229/)): fully supported.
    -   **vacation** ([RFC 5230](http://tools.ietf.org/html/rfc5230/)): fully supported.
        -   **vacation-seconds** ([RFC 6131](http://tools.ietf.org/html/rfc6131)): fully supported (v0.2.3+).
    -   **relational** ([RFC 5231](http://tools.ietf.org/html/rfc5231/)): fully supported.
    -   **imap4flags** ([RFC 5232](http://tools.ietf.org/html/rfc5232/)): fully supported.
    -   **subaddress** ([RFC 5233](http://tools.ietf.org/html/rfc5233/)): fully supported, but with limited configurability.
    -   **spamtest** and **virustest** ([RFC 5235](http://tools.ietf.org/html/rfc5235/)): fully supported (v0.1.16+).
    -   **date** ([RFC 5260; Section 4](http://tools.ietf.org/html/rfc5260#section-4)): fully supported (v0.1.12+).
    -   **index** ([RFC 5260; Section 6](http://tools.ietf.org/html/rfc5260#section-6)): fully supported (v0.4.7+).
    -   **editheader** ([RFC 5293](http://tools.ietf.org/html/rfc5293/)): fully supported (v0.3.0+).
    -   **reject** ([RFC 5429; Section 2.2](http://tools.ietf.org/html/rfc5429#section-2.2)): fully supported.
    -   **enotify** ([RFC 5435](http://tools.ietf.org/html/rfc5435/)): fully supported (v0.1.3+).
        -   **mailto** method ([RFC 5436](http://tools.ietf.org/html/rfc5436/)): fully supported (v0.1.3+).
        -   **xmpp** method ([RFC 5437](http://tools.ietf.org/html/rfc5437/)): is under development and will become available as a plugin.
    -   **ihave** ([RFC 5463](http://tools.ietf.org/html/rfc5463)): fully supported (v0.2.4+).
    -   **mailbox** ([RFC 5490; Section 3](http://tools.ietf.org/html/rfc5490#section-3)): fully supported (v0.1.10+).
    -   **mboxmetadata** and **servermetadata** ([RFC 5490](http://tools.ietf.org/html/rfc5490)): fully supported (v0.4.7+).
    -   **foreverypart** ([RFC 5703; Section 3](http://tools.ietf.org/html/rfc5703#section-3)): fully supported (v0.4.10+).
    -   **mime** ([RFC 5703; Section 4](http://tools.ietf.org/html/rfc5703#section-4)): fully supported (v0.4.10+).
    -   **extracttext**  ([RFC 5703; Section 7](http://tools.ietf.org/html/rfc5703#section-7)): fully supported (v0.4.12+).
    -   **include** ([RFC 6609](http://tools.ietf.org/html/rfc6609)): fully supported (v0.4.0+).
    -   **imapsieve** ([RFC 6785](https://tools.ietf.org/html/rfc6785)): fully supported (v0.4.14+).
    -   **duplicate** ([RFC 7352](http://tools.ietf.org/html/rfc7352): fully supported (v0.4.3+).
    -   **regex** ([draft v08](http://tools.ietf.org/html/draft-murchison-sieve-regex-08/); not [latest version](http://tools.ietf.org/html/draft-ietf-sieve-regex-01/)): almost fully supported, but UTF-8 is not supported.

-   The following deprecated extensions are supported for backwards compatibility:

    -   **imapflags** ([obsolete draft](http://tools.ietf.org/html/draft-melnikov-sieve-imapflags-03)): fully backwards compatible (v0.1.3+).
    -   **notify** ([obsolete draft](http://tools.ietf.org/html/draft-martin-sieve-notify-01)): fully backwards compatible (v0.1.15+).

    The availability of these extensions is disabled by default.

-   The following Dovecot-specific Sieve extensions are available:

    -   **vnd.dovecot.debug** ([specification](https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-debug.txt)): allows logging debug messages (v0.3.0+).
    -   **vnd.dovecot.environment** ([specification](https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-dovecot-environment.txt)): extends the standard \"environment\" extension with extra items and a variables namespace for direct access (v0.4.14+).
    -   **vnd.dovecot.execute** ([specification](https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-extprograms.txt)): implements executing a pre-defined set of external programs with the option to process string data through the external program (v0.4.0+; [sieve_extprograms](https://doc.dovecot.org/latest/core/plugins/sieve_extprograms.html) plugin).
    -   **vnd.dovecot.filter** ([specification](https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-extprograms.txt)): implements filtering messages through a pre-defined set of external programs (v0.4.0+; [sieve_extprograms](https://doc.dovecot.org/latest/core/plugins/sieve_extprograms.html) plugin).
    -   **vnd.dovecot.pipe** ([specification](https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-extprograms.txt)): implements piping messages to a pre-defined set of external programs (v0.4.0+; [sieve_extprograms](https://doc.dovecot.org/latest/core/plugins/sieve_extprograms.html) plugin).
    -   **vnd.dovecot.report** ([specification](https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-report.txt)): implements sending Messaging Abuse Reporting Format (MARF) reports ([RFC 5965](http://tools.ietf.org/html/rfc5965)) (v0.4.14+).

    The availability of these extensions is disabled by default.

-   The following extensions are under development:

    -   **ereject**  ([RFC 5429; Section 2.1](http://tools.ietf.org/html/rfc5429#section-2.1)): implemented, but currently equal to **reject**.

-   More extensions to the language exist:

    -   **replace**  ([RFC 5703; Section 5](http://tools.ietf.org/html/rfc5703#section-5)): planned.
    -   **enclose**  ([RFC 5703; Section 6](http://tools.ietf.org/html/rfc5703#section-6)): planned.
    -   **envelope-dsn**, **envelope-deliverby**, **redirect-dsn** and **redirect-deliverby**  ([RFC 6009](http://tools.ietf.org/html/rfc6009)): planned; depends on lib-smtp changes in Dovecot.
    -   **extlists**  ([RFC 6134](http://tools.ietf.org/html/rfc6134)): planned.
    -   **convert**  ([RFC 6558](http://tools.ietf.org/html/rfc6558)): under consideration.

    These extensions will be added as soon as the necessary infrastructure is available.

### ManageSieve

The ManageSieve protocol (as specified in [RFC 5804](http://tools.ietf.org/html/rfc5804)) is supported.

## License

Pigeonhole is open source and distributed under the same license as Dovecot: [LGPL v2.1](http://www.dovecot.org/doc/COPYING.LGPL)

## Contact info

-   Author: Stephan Bosch, &gt;stephan.bosch at open-xchange dot com&lt;.
-   Please use [the Dovecot mailing list](http://www.dovecot.org/mailinglists.html) for questions about Pigeonhole or Dovecot. You don\'t have to subscribe to it.
