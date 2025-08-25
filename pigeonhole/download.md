## Download

Checking the PGP signature is always a good idea, especially nowadays when so many software packages have been trojaned.

All releases since 2.4.0 are signed with public key 4EDC5219 (full signature: <code>EF08 8207 9FD4 ED32 BF8B 23B2 A1B0 9EF8 4ED C5219</code>), which can be found at <https://repo.dovecot.org/DOVECOT-REPO-GPG-2.4>.

All releases since 0.5.5 are signed with public key ED409DA1 (full signature: <code>2BE7 4AAB 3EE7 54DF B9C8 0D33 18A3 48AE ED40 9DA1</code>), which can be found at wwwkeys.pgp.net.

All releases before 0.5.5 are signed with public key 3DFBB4F4 (full signature: <code>42F3 CD50 D4F2 5A41 833B EE37 04D6 2B1E 3DFB B4F4</code>), which can be found at wwwkeys.pgp.net.

### Stable releases

-   Download [v2.4.1 **sources**](https://pigeonhole.dovecot.org/releases/2.4/dovecot-pigeonhole-2.4.1-4.tar.gz) for Dovecot v2.4.1 \[[PGP signature](https://pigeonhole.dovecot.org/releases/2.4/dovecot-pigeonhole-2.4.1-4.tar.gz.sig)\] \[[changes](https://raw.githubusercontent.com/dovecot/pigeonhole/2.4.1/NEWS)\].
-   Download binary packages from [https://repo.dovecot.org](https://repo.dovecot.org/)
-   Find Docker image at <https://hub.docker.com/r/dovecot/dovecot>

### Old stable releases

-   Download [v0.5.21.1 **sources**](https://pigeonhole.dovecot.org/releases/2.3/dovecot-2.3-pigeonhole-0.5.21.1.tar.gz) for Dovecot v2.3. \[[PGP signature](https://pigeonhole.dovecot.org/releases/2.3/dovecot-2.3-pigeonhole-0.5.21.1.tar.gz.sig)\] \[[changes](https://raw.githubusercontent.com/dovecot/pigeonhole/0.5.21.1/NEWS)\].
-   Download [v0.4.24.2 **sources**](https://pigeonhole.dovecot.org/releases/2.2/dovecot-2.2-pigeonhole-0.4.24.2.tar.gz) for Dovecot v2.2. \[[PGP signature](https://pigeonhole.dovecot.org/releases/2.2/dovecot-2.2-pigeonhole-0.4.24.2.tar.gz.sig)\] \[[changes](https://raw.githubusercontent.com/dovecot/pigeonhole/0.4.24.2/NEWS)\].

### Git repository

You can get the latest development code from the [Git repository](https://github.com/dovecot/pigeonhole). Note that since it\'s constantly in development, it may be more or less broken.

The following repositories are available:

-   Pigeonhole package for Dovecot v2.3 (stable)

        # v2.3 code tree:
        git clone https://github.com/dovecot/pigeonhole.git

    Refer to the [README](https://raw.githubusercontent.com/dovecot/pigeonhole/master/README) and [INSTALL](https://raw.githubusercontent.com/dovecot/pigeonhole/master/INSTALL) files for installation instructions.

### Old Mercurial repository

The old [Mercurial repository website](http://hg.rename-it.nl) still hosts many of the repositories for older releases and plugins.

The following repositories are available:

-   Pigeonhole package for Dovecot v2.1/v2.0 (oldstable)

        # v2.1 code tree:
        hg clone http://hg.rename-it.nl/dovecot-2.1-pigeonhole/
        # v2.0 code tree:
        hg clone http://hg.rename-it.nl/dovecot-2.0-pigeonhole/

    See [instructions in the Dovecot Wiki](http://wiki2.dovecot.org/Pigeonhole/Installation) for how to compile the Sieve plugin from Mercurial.

-   Sieve for Dovecot v1.2

        # v1.2 code tree:
        hg clone http://hg.rename-it.nl/dovecot-1.2-sieve/

    See [instructions in the Dovecot Wiki](http://wiki.dovecot.org/LDA/Sieve/Dovecot) for how to compile the Sieve plugin from Mercurial.

-   ManageSieve for Dovecot v1.x

        # v1.2 code tree:
        hg clone http://hg.rename-it.nl/dovecot-1.2-managesieve/
        # v1.1 code tree:
        hg clone http://hg.rename-it.nl/dovecot-1.1-managesieve/

    See [instructions in the Dovecot Wiki](http://wiki.dovecot.org/ManageSieve/Install) for how to compile ManageSieve from Mercurial.

-   ManageSieve Patch for Dovecot v1.x

        # v1.2 patch tree:
        hg clone http://hg.rename-it.nl/dovecot-1.2-managesieve-patch/
        # v1.1 patch tree:
        hg clone http://hg.rename-it.nl/dovecot-1.1-managesieve-patch/
        # v1.0 patch tree:
        hg clone http://hg.rename-it.nl/dovecot-1.0-managesieve-patch/

    See [instructions in the Dovecot Wiki](http://wiki.dovecot.org/ManageSieve/Install) for how to apply the ManageSieve patch from Mercurial.

You can update these later with:

    hg pull
    hg update

### Plugins

The latest Mercurial revisions of the Sieve interpreter include plugin support. Currently, the following plugins are under development and provided separately:

-   **Enotify XMPP** (not released; obsolete; download from repository for version [v0.1](http://hg.rename-it.nl/pigeonhole-enotify-xmpp))

    This plugin adds the new xmpp notification method ([RFC 5437](http://tools.ietf.org/html/rfc5437)) for the enotify extension ([RFC 5435](http://tools.ietf.org/html/rfc5435)). Using this plugin, users can make the Sieve interpreter send XMPP (Jabber) notifications. It is **not finished** and only published for those that are curious to test it. Development continues only for Dovecot v2.3. Refer to the README and INSTALL files for installation instructions.

-   **Sieve Extdata** (not released; download from repository for version [v0.1](http://hg.rename-it.nl/pigeonhole-sieve-extdata)/ [v0.2](http://hg.rename-it.nl/pigeonhole-0.2-sieve-extdata)/ [v0.3](http://hg.rename-it.nl/pigeonhole-0.3-sieve-extdata)/ [v0.4](https://github.com/stephanbosch/sieve-extdata-plugin/tree/core-0.4)/ [v0.5](https://github.com/stephanbosch/sieve-extdata-plugin/tree/core-0.5)/ [development](https://github.com/stephanbosch/sieve-extdata-plugin))

    This plugin adds support for accessing string data from a Dovecot dict lookup. This plugin is experimental and defines a vendor-specific extension to the Sieve language. This plugin is under active development and may change significantly in the near future. It is published mainly for evaluation. Refer to the [INSTALL](http://hg.rename-it.nl/pigeonhole-0.2-sieve-extdata/raw-file/tip/INSTALL) and [README](http://hg.rename-it.nl/pigeonhole-0.2-sieve-extdata/raw-file/tip/README) files for installation and usage instructions. The extension provided by this plugin (**vnd.dovecot.extdata**) is documented [here](http://hg.rename-it.nl/pigeonhole-0.4-sieve-extdata/raw-file/tip/doc/rfc/spec-bosch-sieve-external-data.txt).

-   **Sieve Pipe** (not released; obsolete; download from repository for version [v0.2](http://hg.rename-it.nl/pigeonhole-0.2-sieve-pipe))

    This plugin provides an extension to the Sieve filtering language adding a new action command for piping messages to a pre-defined set of external programs. To mitigate the security concerns, the external programs cannot be chosen arbitrarily; the available programs are restricted through administrator configuration. This plugin is experimental and defines a vendor-specific extension to the Sieve language. For newer versions of Pigeonhole this plugin is superseded by the Sieve Extprograms plugin (see below). Refer to the [INSTALL](http://hg.rename-it.nl/pigeonhole-0.2-sieve-pipe/raw-file/tip/INSTALL) and [README](http://hg.rename-it.nl/pigeonhole-0.2-sieve-pipe/raw-file/tip/README) files for installation and usage instructions. The extension provided by this plugin (**vnd.dovecot.pipe**) is documented [here](http://hg.rename-it.nl/pigeonhole-0.2-sieve-pipe/raw-file/tip/doc/rfc/spec-bosch-sieve-pipe.txt).

-   **Sieve Extprograms** (part of Pigeonhole v0.4 release; download from repository for version [v0.3](http://hg.rename-it.nl/pigeonhole-0.3-sieve-extprograms))

    This plugin adds support for the Dovecot-specific **vnd.dovecot.pipe**, **vnd.dovecot.filter** and **vnd.dovecot.execute** extensions. These extensions add new action commands for invoking a predefined set of external programs (typically shell scripts). Messages can be piped to or filtered through those programs and string data can be input to and retrieved from those programs. To mitigate the security concerns, the external programs cannot be chosen arbitrarily; the available programs are restricted through administrator configuration. This plugin is experimental and defines a vendor-specific extension to the Sieve language. For Pigeonhole v0.3, refer to the [INSTALL](http://hg.rename-it.nl/pigeonhole-0.3-sieve-extprograms/raw-file/tip/INSTALL) and [README](http://hg.rename-it.nl/pigeonhole-0.3-sieve-extprograms/raw-file/tip/README) files for installation and usage instructions. The extensions provided by this plugin are documented
    [here](http://hg.rename-it.nl/dovecot-2.2-pigeonhole/file/tip/doc/rfc/spec-bosch-sieve-extprograms.txt).
