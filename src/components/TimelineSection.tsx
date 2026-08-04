import React from 'react';
import { TimelineItem } from '../types';

interface TimelineSectionProps {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  data: TimelineItem[];
  searchQuery: string;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  id,
  kicker,
  title,
  intro,
  data,
  searchQuery,
}) => {
  const matchesSearch = (item: TimelineItem) => {
    if (!searchQuery) return true;
    const plain = `${item.y} ${item.t} ${item.d}`.toLowerCase();
    return plain.includes(searchQuery.toLowerCase());
  };

  const filteredData = data.filter(matchesSearch);

  if (searchQuery && filteredData.length === 0) {
    return null;
  }

  return (
    <section className="sec" id={id}>
      <div className="sec__head">
        <span className="sec__kicker">{kicker}</span>
        <h2 className="sec__h">{title}</h2>
        <p className="sec__intro">{intro}</p>
        <div className="rule"></div>
      </div>

      <ul className="tl">
        {filteredData.map((item, idx) => (
          <li key={idx} className={`tl__i ${item.gold ? 'tl__i--gold' : ''}`}>
            <span className="tl__yr">{item.y}</span>
            <p className="tl__t">{item.t}</p>
            <p className="tl__d" dangerouslySetInnerHTML={{ __html: item.d }} />
          </li>
        ))}
      </ul>
    </section>
  );
};
