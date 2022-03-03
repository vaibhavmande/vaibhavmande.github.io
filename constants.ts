const links = {
  linkedin: 'https://www.linkedin.com/in/vaibhavmande/',
  medium: 'https://vaibhavmande.medium.com/',
  twitter: 'https://twitter.com/vaibhvmande',
  github: 'https://github.com/vaibhavmande',
  resume: `https://docs.google.com/document/d/${process.env.DOC_ID}/export?format=pdf`,
  stackoverflow: 'https://stackoverflow.com/users/2157907/vaibhavmande'
};

export default Object.freeze({
  ...links
});
