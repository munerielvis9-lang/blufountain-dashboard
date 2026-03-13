import React from 'react';

interface StatCardProps {
  title: string;
  icon: string;
  value: string | number;
  changeText: string;
  isPositive: boolean;
  iconBg: string;
  iconColor: string;
}

export function StatCard({ title, icon, value, changeText, isPositive, iconBg, iconColor }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <div className="stat-icon" style={{ background: iconBg, color: iconColor }}>
          {icon}
        </div>
      </div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
        {changeText}
      </div>
    </div>
  );
}