const siteName = process.env.NEXT_PUBLIC_SITE_NAME

if (!siteName) {
  throw new Error('[ ERROR ] Site name is not defined')
}

export { siteName }
