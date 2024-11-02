import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SnakeGame.css';

const BOARD_SIZE = 10;
const initialSnake = [{ x: Math.floor(BOARD_SIZE / 2), y: Math.floor(BOARD_SIZE / 2) }];

const generateFoodPosition = () => {
  const x = Math.floor(Math.random() * BOARD_SIZE);
  const y = Math.floor(Math.random() * BOARD_SIZE);
  return { x, y };
};

const Game = () => {
  const navigate = useNavigate();
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(generateFoodPosition);
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

    if (
      head.x < 0 || head.x >= BOARD_SIZE || 
      head.y < 0 || head.y >= BOARD_SIZE || 
      snake.some(segment => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateFoodPosition());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    if (!gameOver) {
      const gameInterval = setInterval(moveSnake, 150);
      return () => clearInterval(gameInterval);
    }
  }, [gameOver, snake, direction]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigoi game over -tilassa
  useEffect(() => {
    if (gameOver) {
      navigate('/game over');
    }
  }, [gameOver, navigate]);


  return (
    <div className="game-container">
      <div className="board">
        {Array.from({ length: BOARD_SIZE }).map((_, row) => (
          <div key={row} className="row">
            {Array.from({ length: BOARD_SIZE }).map((_, col) => {
              const isSnake = snake.some(segment => segment.x === col && segment.y === row);
              const isFood = food.x === col && food.y === row;
              return (
                <div key={col} className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`} />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
