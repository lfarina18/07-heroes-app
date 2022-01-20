import { HeroCard } from './HeroCard';
import { getHeroeByPublisher } from '../../selectors/getHeroByPublisher';

export const HeroList = ({ publisher }) => {
    const heroes = getHeroeByPublisher(publisher);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    );
};
