const API_KEY="f0968a7349aa4d21c1ae365c803781eba104dc38";

const requests={
    fetchDomainSearch:`/domain-search?domain=stripe.com&api_key=${API_KEY}`,
    fetchEmailFinder:`/email-finder?&api_key=${API_KEY}`,
    fetchAuthorFinder:`/author-finder?&api_key=${API_KEY}`,
    fetchEmailVerification:`/email-verifier?&api_key=${API_KEY}`,
    fetchEmailCounter:`/email-count`,
}

export default requests