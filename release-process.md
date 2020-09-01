# Release process
To make a release:
1. Bump the version in the manifest (previously did it right after a release, now do it right before)
2. Update changelog
3. Commit and push
4. Run `./scripts/package.sh`
5. Upload to Mozilla
  - Go to [Destylize Developer Hub page](https://addons.mozilla.org/en-US/developers/addon/destylize/edit)
  - Click `Upload New Version` and follow the steps
6. Upload to Chrome
  - Go to [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole/241b3c72-34be-46ad-992d-f496d7570ef6/ailchnlcihmbjhdikpfmeclpejbaggcp/edit?hl=en-US)
  - Click `Package`
  - Click `Upload new package` and follow steps
