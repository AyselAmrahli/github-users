import React, { FC, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { userDetailContext } from '../context/userDetailProvider';

import Container from '../components/Container';
import Card from '../components/Card';
import List from '../components/List';
import ListItem from '../components/List/ListItem';

const Detail: FC = () => {
  const [userDetail] = useContext(userDetailContext);
  const[repos, setRepos] = useState([]);

  const getData = async (url: string) => {
    try {
      const	{data} = await axios.get(url);
      setRepos(data);
    } catch (error) {
      console.log(error) // kept simple
    }
  }

  useEffect(() => {
    if(userDetail?.repos_url)  {
      getData(userDetail.repos_url)
    }
  }, [userDetail])

  const repoList = repos?.map((repo: any) => <ListItem key={repo.id}><label>{repo.name}:</label><span>{repo.description || 'No description'}</span></ListItem>)

	return (
		<div className="page page-detail">
			<Container>
        {userDetail ?
        <Card>
          <div className="flex-justify-between">
            <div>
              <img className="user-avatar" src={userDetail.avatar_url} alt="user avatar" />
              <p>
                login: {userDetail.login}
              </p>
              <p>
                name: {userDetail.name}
              </p>
              <p>
                company: {userDetail.company}
              </p>
              <p>
                Repos: {userDetail.public_repos}
              </p>


            <List>
              {repoList}
            </List>
            </div>
          </div>
        </Card> : <p>No Data</p>}

      </Container>
		</div>
	)
}

export default Detail;