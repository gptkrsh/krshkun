import { links } from '../library/config'

export function badger (key: links, value: string, name: string) {
  switch (key) {
    case 'twitter':
      return `<a href="https://twitter.com/@${value}"><img src="https://img.shields.io/badge/${value}-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="${name}'s ${key}"></a>`
    case 'github':
      return `<a href="${value}"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'tumblr':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Tumblr-%2336465D.svg?&style=for-the-badge&logo=Tumblr&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'tiktok':
      return `<a href="${value}"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'stackoverflow':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'polywork':
      return `<a href="${value}"><img src="https://img.shields.io/badge/polywork-543DE0?style=for-the-badge&logo=polywork&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'linkedin':
      return `<a href="${value}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'codepen':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'devpost':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Devpost-003E54?style=for-the-badge&logo=Devpost&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'facebook':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'dribbble':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'gitlab':
      return `<a href="${value}"><img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'hackerearth':
      return `<a href="${value}"><img src="https://img.shields.io/badge/HackerEarth-%232C3454.svg?&style=for-the-badge&logo=HackerEarth&logoColor=Blue" alt="${name}'s ${key}"></a>`

    case 'hackerrank':
      return `<a href="${value}"><img src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'instagram':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'kaggle':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=Kaggle&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'leetcode':
      return `<a href="${value}"><img src="https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black" alt="${name}'s ${key}"></a>`

    case 'pinterest':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Pinterest-%23E60023.svg?&style=for-the-badge&logo=Pinterest&logoColor=white" alt="${name}'s ${key}"></a>`

    case 'reddit':
      return `<a href="${value}"><img src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" alt="${name}'s ${key}"></a>`
  }
}
