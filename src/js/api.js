// Módulo responsável por comunicação com a API do GitHub

(function () {
    const BASE_URL = 'https://api.github.com';

    // Retorna o usuário
    const fetchUserProfile = async (username) => {
        const response = await fetch(`${BASE_URL}/users/${username}`);

        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }

        return await response.json();
    };

    // Retorna os repositórios do usuário
    const fetchGithubUserRepos = async (userName) => {
        const response = await fetch(`${BASE_URL}/users/${userName}/repos?per_page=10&sort=created`);
        if (!response.ok) {
            throw new Error('Repositórios não encontrados.');
        }
        const repositories = await response.json();

        return await Promise.all(repositories.map(async (repo) => {
            const lastCommitDate = await fetchLastCommitDate(userName, repo.name);

            return {
                ...repo,
                lastCommitDate
            };
        }));
    };

    const fetchLastCommitDate = async (userName, repoName) => {
        try {
            const encodedUserName = encodeURIComponent(userName);
            const encodedRepoName = encodeURIComponent(repoName);
            const response = await fetch(`${BASE_URL}/repos/${encodedUserName}/${encodedRepoName}/commits?per_page=1`);

            if (!response.ok) {
                return null;
            }

            const commits = await response.json();
            return commits[0]?.commit?.committer?.date || commits[0]?.commit?.author?.date || null;
        } catch (error) {
            return null;
        }
    };

    window.githubApi = {
        fetchGithubUserRepos,
        fetchUserProfile
    };
})();
