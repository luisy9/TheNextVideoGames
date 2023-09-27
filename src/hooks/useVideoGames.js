import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { onVideoGames } from '../store';

export const useVideoGames = (nombre_plataform) => {
  const dispatch = useDispatch();
  const [plataform, setPlataform] = useState([]);


  const getVideoGames = async () => {
    try {
      const response = await calendarApi.post('/videoGames/getVideoGames', {
        nombre_plataform: nombre_plataform,
      });

      dispatch(onVideoGames(response.data.result));
      setPlataform(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const memorizeData = useMemo(() => plataform, [plataform]);

  return {
    plataform: memorizeData,
    getVideoGames,
  };
};

export default useVideoGames;
