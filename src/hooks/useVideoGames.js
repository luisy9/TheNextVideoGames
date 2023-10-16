import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { onVideoGames } from '../store';

export const useVideoGames = () => {
  const dispatch = useDispatch();
  const [plataform, setPlataform] = useState(null);

  const getVideoGames = async ({ name }) => {
    try {
      const { data } = await calendarApi.post('/videoGames/getVideoGames', {
        name,
      });
      dispatch(onVideoGames(data.result));
      setPlataform(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // const memorizeData = useMemo(() => plataform, [plataform]);

  return {
    plataform,
    getVideoGames,
    // videoGame,
  };
};
