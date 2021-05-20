export function getIpfsHash(uri: string | null): string | null {
  if (uri != null && !!uri) {
    let hash = uri.split('/').pop()

    if (hash != null && hash.startsWith('Qm') && !!hash) {
      return hash
    }
  }

  return null
}
