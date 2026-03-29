import React, { useMemo, useState } from "react";

const SKILLS = [
	{
		name: "HTML",
		level: 95,
		details: "Semantic markup, accessible structure, SEO-friendly pages.",
		color: "#f97316",
	},
	{
		name: "CSS",
		level: 90,
		details: "Responsive layouts (Flex/Grid), animations, design systems.",
		color: "#38bdf8",
	},
	{
		name: "JavaScript",
		level: 85,
		details: "ESNext, async patterns, DOM, performance, clean architecture.",
		color: "#facc15",
	},
	{
		name: "React",
		level: 82,
		details: "Hooks, component patterns, state management, reusable UI.",
		color: "#22d3ee",
	},
	{
		name: "Next.js",
		level: 75,
		details: "Routing, data fetching, SSR/SSG basics, app structure.",
		color: "#a78bfa",
	},
];

function clamp(n, min, max) {
	return Math.max(min, Math.min(max, n));
}

function SkillRing({ name, level, color, isActive, onSelect }) {
	const size = 168;
	const stroke = 16;
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const pct = clamp(level, 0, 100);
	const dash = (pct / 100) * c;

	return (
		<button
			type="button"
			className={"ring" + (isActive ? " is-active" : "")}
			onClick={onSelect}
			aria-pressed={isActive}
			aria-label={`${name} ${pct}%`}
			style={{ "--ring": color }}
		>
			<svg
				className="ring__svg"
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
				role="progressbar"
				aria-valuenow={pct}
				aria-valuemin={0}
				aria-valuemax={100}
			>
				<defs>
					<linearGradient id={`grad-${name}`} x1="0" y1="0" x2="1" y2="1">
						<stop offset="0%" stopColor={color} stopOpacity="0.95" />
						<stop offset="100%" stopColor="#22d3ee" stopOpacity="0.95" />
					</linearGradient>
				</defs>

				<circle
					className="ring__track"
					cx={size / 2}
					cy={size / 2}
					r={r}
					strokeWidth={stroke}
				/>

				{/* subtle glow arc behind */}
				<circle
					className="ring__glow"
					cx={size / 2}
					cy={size / 2}
					r={r}
					strokeWidth={stroke}
					strokeDasharray={`${Math.min(dash + 18, c)} ${Math.max(c - dash - 18, 0)}`}
				/>

				<circle
					className="ring__progress"
					cx={size / 2}
					cy={size / 2}
					r={r}
					strokeWidth={stroke}
					strokeDasharray={`${dash} ${c - dash}`}
					stroke={`url(#grad-${name})`}
				/>
			</svg>

			<div className="ring__center">
				<div className="ring__name ring__name--center">{name}</div>
				<div className="ring__pct">{pct}%</div>
			</div>
		</button>
	);
}

export default function Skills() {
	const [active, setActive] = useState(SKILLS[0]?.name ?? null);

	const activeSkill = useMemo(
		() => SKILLS.find((s) => s.name === active) ?? SKILLS[0],
		[active]
	);

	return (
		<section id="skills" className="section">
			<div className="container">
				<div className="section__head">
					<h2 className="section__title">Skills</h2>
					<p className="section__sub">Tap a skill to highlight it</p>
				</div>

				<div className="skillsInteractive skillsInteractive--rings">
					<div className="rings" role="list">
						{SKILLS.map((s) => (
							<div key={s.name} role="listitem" className="rings__item">
								<SkillRing
									name={s.name}
									level={s.level}
									color={s.color}
									isActive={s.name === active}
									onSelect={() => setActive(s.name)}
								/>
							</div>
						))}
					</div>

					<aside className="skillPanel" aria-live="polite">
						<h3 className="skillPanel__title">{activeSkill?.name}</h3>
						<p className="skillPanel__meta">
							Proficiency: {activeSkill?.level}%
						</p>
						<p className="skillPanel__desc">{activeSkill?.details}</p>
					</aside>
				</div>
			</div>
		</section>
	);
}
