import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { userDetailContext } from '../context/userDetailProvider';

import Button from '../components/Button';
import Container from '../components/Container';
import Card from '../components/Card';
import SearchField from '../components/SearchField';

const Home: FC = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<any>(null)
  const [userDetail, setUserDetail] = useContext(userDetailContext);
  
  const getData = async () => {
    try {
      const	{data} = await axios.get(`https://api.github.com/users/${value}`);
      setUserDetail(data);
      setError(null)
    } catch (error) {
      const err = error as AxiosError<any>
      setError(err.response?.data.message)
      setUserDetail(null)
    }
  }
  

	return (
		<div className="page page-home">
			<Container>
        <div className="flex-justify-center">
          <SearchField
            placeholder='Search for users...'
            onChange={(val: string) =>setValue(val)}
            defaultValue={value}
            dataTest="data-search-user"
          />
          <Button
            onClick={getData}
            disabled={!value}
            dataTest="data-search-button"
          >
            Search
          </Button>
        </div>
        {userDetail &&
        <Card dataTest="data-test-card">
          <div className="flex-justify-between">
            <div>
              <p>
                {userDetail.login}
              </p>
              <span>
                {userDetail.name}
              </span>
            </div>
            <Link to="/user/detail" className="see-more">
              <span data-testid="data-see-more">See more</span>
            </Link>
          </div>
        </Card>}

        {error && <p>{error}</p>}

      </Container>
		</div>
	)
}

export default Home;