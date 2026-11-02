
'use client';

import { useMemo, useState } from 'react';
import SolarAdSlider from './SolarAdSlider';



const money = (value) =>
  new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const number = (value, digits = 1) =>
  new Intl.NumberFormat('en-BD', {
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);

const initialLoads = [
  { name: 'Ceiling fan', qty: 2, watts: 75, hours: 8 },
  { name: 'LED light', qty: 4, watts: 10, hours: 5 },
  { name: 'TV', qty: 1, watts: 100, hours: 4 },
  { name: 'Refrigerator', qty: 1, watts: 150, hours: 8 },
  { name: 'Desktop computer', qty: 1, watts: 200, hours: 6 },
  { name: 'Laptop', qty: 1, watts: 65, hours: 5 },
  { name: 'Wi-Fi router', qty: 1, watts: 12, hours: 24 },
  { name: 'CCTV camera', qty: 4, watts: 6, hours: 24 },
  { name: 'DVR / NVR', qty: 1, watts: 25, hours: 24 },
  { name: 'Water pump', qty: 0, watts: 500, hours: 1 },
  { name: 'Iron', qty: 0, watts: 1000, hours: 0.5 },
  { name: 'Rice cooker', qty: 0, watts: 700, hours: 1 },
  { name: 'Air conditioner', qty: 0, watts: 1200, hours: 6 },
];

const defaultPrices = {
  panel: 23750,
  battery: 48500,
  inverter: 50000,
  mppt: 22500,
  dcProtection: 4500,
  acProtection: 4500,
  cables: 6000,
  mounting: 6000,
  earthing: 4000,
  labour: 10000,
  transport: 3000,
};

const tariffOptions = [
  { label: '৳4.63 – 0–50 units (reference)', value: 4.63 },
  { label: '৳5.26 – 51–75 units (reference)', value: 5.26 },
  { label: '৳8.50 – 76–200 units (reference)', value: 8.5 },
  { label: '৳9.10 – 201–300 units (reference)', value: 9.1 },
  { label: '৳9.62 – 301–400 units (reference)', value: 9.62 },
  { label: '৳15.01 – 401–600 units (reference)', value: 15.01 },
  { label: '৳17.35 – above 600 units (reference)', value: 17.35 },
];

function Field({ label, value, onChange, type = 'number', suffix, min = 0, step = 'any' }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <div className="flex overflow-hidden rounded-lg border border-slate-300 bg-white focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
        <input
          type={type}
          min={min}
          step={step}
          value={value}
          onChange={(e) => onChange(type === 'number' ? Number(e.target.value) : e.target.value)}
          className="min-w-0 w-full px-3 py-2.5 text-sm text-slate-900 outline-none"
        />
        {suffix && (
          <span className="flex items-center bg-slate-50 px-3 text-xs text-slate-500">
            {suffix}
          </span>
        )}
      </div>
    </label>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-green-600"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function ResultCard({ label, value, detail, highlight = false }) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? 'border-green-300 bg-green-50' : 'border-slate-200 bg-white'}`}>
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className={`mt-2 text-xl font-bold ${highlight ? 'text-green-700' : 'text-slate-900'}`}>
        {value}
      </p>
      {detail && <p className="mt-1 text-xs text-slate-500">{detail}</p>}
    </div>
  );
}

function Section({ title, description, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      <div className="mb-4">
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function SolarPanel() {
  const [mode, setMode] = useState('normal');

  // Common ROI assumptions
  const [investment, setInvestment] = useState(100000);
  const [capacity, setCapacity] = useState(1);
  const [sunHours, setSunHours] = useState(4);
  const [efficiency, setEfficiency] = useState(75);
  const [tariff, setTariff] = useState(8.5);
  const [monthlyConsumption, setMonthlyConsumption] = useState(200);
  const [selfUse, setSelfUse] = useState(80);
  const [exportShare, setExportShare] = useState(0);
  const [exportRate, setExportRate] = useState(0);
  const [lifespan, setLifespan] = useState(25);
  const [degradation, setDegradation] = useState(0.5);
  const [maintenance, setMaintenance] = useState(1000);
  const [tariffIncrease, setTariffIncrease] = useState(3);
  const [inverterReplacement, setInverterReplacement] = useState(25000);
  const [inverterYear, setInverterYear] = useState(12);
  const [batteryReplacement, setBatteryReplacement] = useState(0);
  const [batteryInterval, setBatteryInterval] = useState(5);

  // Advanced load and sizing
  const [loads, setLoads] = useState(initialLoads);
  const [batteryVoltage, setBatteryVoltage] = useState(48);
  const [autonomy, setAutonomy] = useState(1);
  const [dod, setDod] = useState(80);
  const [inverterEfficiency, setInverterEfficiency] = useState(90);
  const [pvMargin, setPvMargin] = useState(1.25);
  const [inverterMargin, setInverterMargin] = useState(1.25);
  const [batteryMargin, setBatteryMargin] = useState(1.15);
  const [panelWatts, setPanelWatts] = useState(550);
  const [batteryUnitVoltage, setBatteryUnitVoltage] = useState(51.2);
  const [batteryUnitAh, setBatteryUnitAh] = useState(100);
  const [prices, setPrices] = useState(defaultPrices);
  const [customCost, setCustomCost] = useState(0);

  const loadTotals = useMemo(() => {
    const runningWatts = loads.reduce(
      (sum, item) => sum + item.qty * item.watts,
      0
    );
    const dailyWh = loads.reduce(
      (sum, item) => sum + item.qty * item.watts * item.hours,
      0
    );
    return { runningWatts, dailyWh };
  }, [loads]);

  const sizing = useMemo(() => {
    const safeDod = Math.max(dod / 100, 0.01);
    const safeInvEff = Math.max(inverterEfficiency / 100, 0.01);
    const dailyKwh = loadTotals.dailyWh / 1000;

    const inverterW = loadTotals.runningWatts * inverterMargin;

    const batteryWh =
      (loadTotals.dailyWh * autonomy * batteryMargin) /
      (safeDod * safeInvEff);

    const batteryAh = batteryWh / Math.max(batteryVoltage, 1);

    const pvKwp =
      dailyKwh /
      (Math.max(sunHours, 0.1) * Math.max(efficiency / 100, 0.01)) *
      pvMargin;

    const panelCount = Math.ceil((pvKwp * 1000) / Math.max(panelWatts, 1));
    const actualPvKwp = (panelCount * panelWatts) / 1000;

    const seriesCount = Math.max(
      1,
      Math.round(batteryVoltage / Math.max(batteryUnitVoltage, 0.1))
    );
    const parallelCount = Math.ceil(
      batteryAh / Math.max(batteryUnitAh, 1)
    );
    const batteryCount = seriesCount * parallelCount;

    const mpptCurrent = (actualPvKwp * 1000) / Math.max(batteryVoltage * 0.95, 1);

    return {
      dailyKwh,
      inverterW,
      batteryWh,
      batteryAh,
      pvKwp,
      actualPvKwp,
      panelCount,
      seriesCount,
      parallelCount,
      batteryCount,
      mpptCurrent,
    };
  }, [
    loadTotals,
    dod,
    inverterEfficiency,
    autonomy,
    batteryMargin,
    batteryVoltage,
    sunHours,
    efficiency,
    pvMargin,
    inverterMargin,
    panelWatts,
    batteryUnitVoltage,
    batteryUnitAh,
  ]);

  const equipmentCost = useMemo(() => {
    const batteryCost = sizing.batteryCount * prices.battery;
    const panelCost = sizing.panelCount * prices.panel;

    const items = [
      { label: 'Solar panels', qty: sizing.panelCount, price: prices.panel, total: panelCost },
      { label: 'Battery units', qty: sizing.batteryCount, price: prices.battery, total: batteryCost },
      { label: 'Hybrid inverter', qty: 1, price: prices.inverter, total: prices.inverter },
      { label: 'MPPT controller', qty: 1, price: prices.mppt, total: prices.mppt },
      { label: 'DC protection', qty: 1, price: prices.dcProtection, total: prices.dcProtection },
      { label: 'AC protection', qty: 1, price: prices.acProtection, total: prices.acProtection },
      { label: 'Cables & connectors', qty: 1, price: prices.cables, total: prices.cables },
      { label: 'Mounting structure', qty: 1, price: prices.mounting, total: prices.mounting },
      { label: 'Earthing & surge protection', qty: 1, price: prices.earthing, total: prices.earthing },
      { label: 'Installation labour', qty: 1, price: prices.labour, total: prices.labour },
      { label: 'Transport & miscellaneous', qty: 1, price: prices.transport, total: prices.transport },
    ];

    const total = items.reduce((sum, item) => sum + item.total, 0) + customCost;
    return { items, total };
  }, [sizing, prices, customCost]);

  const activeInvestment = mode === 'advanced' ? equipmentCost.total : investment;

  const roi = useMemo(() => {
    const dailyGeneration = capacity * sunHours * (efficiency / 100);
    const monthlyGeneration = dailyGeneration * 30;
    const yearlyGeneration = dailyGeneration * 365;

    const yearlyRows = [];
    let cumulative = -activeInvestment;
    let paybackYear = null;
    let totalSavings = 0;
    let totalCosts = 0;

    for (let year = 1; year <= Math.min(Math.max(lifespan, 1), 40); year++) {
      const generation =
        yearlyGeneration * Math.pow(1 - degradation / 100, year - 1);

      const selfConsumed = Math.min(
        generation * (selfUse / 100),
        monthlyConsumption * 12
      );

      const exported = Math.max(
        0,
        generation - selfConsumed
      ) * (exportShare / 100);

      const yearTariff =
        tariff * Math.pow(1 + tariffIncrease / 100, year - 1);

      const savings = selfConsumed * yearTariff;
      const exportRevenue = exported * exportRate;
      const maintenanceCost = maintenance * Math.pow(
        1 + tariffIncrease / 100,
        year - 1
      );

      const inverterCost =
        inverterYear > 0 && year === inverterYear
          ? inverterReplacement
          : 0;

      const batteryCost =
        batteryInterval > 0 &&
        year % batteryInterval === 0 &&
        year < lifespan
          ? batteryReplacement
          : 0;

      const netBenefit =
        savings + exportRevenue - maintenanceCost - inverterCost - batteryCost;

      cumulative += netBenefit;
      totalSavings += savings + exportRevenue;
      totalCosts += maintenanceCost + inverterCost + batteryCost;

      if (paybackYear === null && cumulative >= 0) {
        paybackYear = year;
      }

      yearlyRows.push({
        year,
        generation,
        selfConsumed,
        exported,
        savings,
        exportRevenue,
        maintenanceCost,
        inverterCost,
        batteryCost,
        netBenefit,
        cumulative,
      });
    }

    const netProfit = totalSavings - totalCosts - activeInvestment;
    const roiPercent = activeInvestment > 0
      ? (netProfit / activeInvestment) * 100
      : 0;

    return {
      dailyGeneration,
      monthlyGeneration,
      yearlyGeneration,
      yearlyRows,
      totalSavings,
      totalCosts,
      netProfit,
      roiPercent,
      paybackYear,
    };
  }, [
    capacity,
    sunHours,
    efficiency,
    degradation,
    selfUse,
    monthlyConsumption,
    tariff,
    tariffIncrease,
    exportShare,
    exportRate,
    maintenance,
    inverterYear,
    inverterReplacement,
    batteryInterval,
    batteryReplacement,
    lifespan,
    activeInvestment,
  ]);

  const updateLoad = (index, key, value) => {
    setLoads((previous) =>
      previous.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  const updatePrice = (key, value) => {
    setPrices((previous) => ({ ...previous, [key]: value }));
  };

  const useAdvancedPvForRoi = () => {
    setCapacity(sizing.actualPvKwp);
  };

  const downloadCsv = () => {
    const headers = [
      'Year',
      'Generation kWh',
      'Self-used kWh',
      'Exported kWh',
      'Savings BDT',
      'Export credit BDT',
      'Maintenance BDT',
      'Replacement BDT',
      'Net benefit BDT',
      'Cumulative after investment BDT',
    ];

    const rows = roi.yearlyRows.map((row) => [
      row.year,
      row.generation.toFixed(2),
      row.selfConsumed.toFixed(2),
      row.exported.toFixed(2),
      row.savings.toFixed(2),
      row.exportRevenue.toFixed(2),
      row.maintenanceCost.toFixed(2),
      (row.inverterCost + row.batteryCost).toFixed(2),
      row.netBenefit.toFixed(2),
      row.cumulative.toFixed(2),
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))
      .join('\n');

    const blob = new Blob(['\uFEFF' + csv], {
      type: 'text/csv;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'solar-roi-cashflow.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const investmentField = mode === 'advanced'
    ? equipmentCost.total
    : investment;

  return (
    <div className="w-full bg-slate-50 py-10">
      <SolarAdSlider />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
            PC CLUB BD · SOLAR ENERGY
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Solar Investment & ROI Calculator
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Calculate solar electricity generation, Bangladesh electricity
            bill savings, installation cost, investment recovery and lifetime profit.
          </p>
        </div>

        {/* Calculation mode */}
        <div className="mx-auto mb-8 flex max-w-md rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
          <button
            type="button"
            onClick={() => setMode('normal')}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition ${
              mode === 'normal'
                ? 'bg-green-700 text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Normal Calculation
          </button>
          <button
            type="button"
            onClick={() => setMode('advanced')}
            className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition ${
              mode === 'advanced'
                ? 'bg-green-700 text-white shadow'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Advanced Calculation
          </button>
        </div>

        {/* Normal mode */}
        {mode === 'normal' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <Section
              title="Solar System & Investment"
              description="Enter your planned solar system details."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Total installation investment"
                  value={investment}
                  onChange={setInvestment}
                  suffix="BDT"
                />
                <Field
                  label="Solar panel capacity"
                  value={capacity}
                  onChange={setCapacity}
                  suffix="kWp"
                  step="0.1"
                />
                <Field
                  label="Peak sun hours per day"
                  value={sunHours}
                  onChange={setSunHours}
                  suffix="hours"
                  step="0.1"
                />
                <Field
                  label="System efficiency / derating"
                  value={efficiency}
                  onChange={setEfficiency}
                  suffix="%"
                  step="1"
                />
                <Field
                  label="Panel lifespan"
                  value={lifespan}
                  onChange={setLifespan}
                  suffix="years"
                />
                <Field
                  label="Annual panel degradation"
                  value={degradation}
                  onChange={setDegradation}
                  suffix="%"
                  step="0.1"
                />
              </div>
            </Section>

            <Section
              title="Electricity Bill & Usage"
              description="Use your actual bill's marginal unit cost where possible."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <SelectField
                  label="Reference electricity tariff"
                  value={tariff}
                  onChange={setTariff}
                  options={tariffOptions}
                />
                <Field
                  label="Monthly grid consumption"
                  value={monthlyConsumption}
                  onChange={setMonthlyConsumption}
                  suffix="units"
                />
                <Field
                  label="Solar energy self-consumption"
                  value={selfUse}
                  onChange={setSelfUse}
                  suffix="%"
                />
                <Field
                  label="Exported energy share"
                  value={exportShare}
                  onChange={setExportShare}
                  suffix="%"
                />
                <Field
                  label="Approved export credit"
                  value={exportRate}
                  onChange={setExportRate}
                  suffix="BDT/unit"
                  step="0.01"
                />
                <Field
                  label="Annual electricity price increase"
                  value={tariffIncrease}
                  onChange={setTariffIncrease}
                  suffix="%"
                  step="0.1"
                />
              </div>
              <p className="mt-3 text-xs leading-5 text-amber-700">
                Tariff figures are editable reference values, not a live utility
                bill calculation. Actual tariff slabs, VAT and other charges may differ.
                Export credit should only be entered when approved.
              </p>
            </Section>
          </div>
        )}

        {/* Advanced mode */}
        {mode === 'advanced' && (
          <div className="space-y-6">
            <Section
              title="1. Appliance Load Calculator"
              description="Edit appliance quantity, rated watts and daily usage. Running load and daily energy are calculated automatically."
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-slate-100 text-xs uppercase text-slate-600">
                    <tr>
                      <th className="p-3">Appliance</th>
                      <th className="p-3">Quantity</th>
                      <th className="p-3">Watts each</th>
                      <th className="p-3">Hours/day</th>
                      <th className="p-3">Running W</th>
                      <th className="p-3">Energy Wh/day</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loads.map((item, index) => (
                      <tr key={item.name} className="border-b border-slate-100">
                        <td className="p-3 font-medium text-slate-800">{item.name}</td>
                        {['qty', 'watts', 'hours'].map((key) => (
                          <td className="p-2" key={key}>
                            <input
                              type="number"
                              min="0"
                              step="any"
                              value={item[key]}
                              onChange={(e) =>
                                updateLoad(index, key, Number(e.target.value))
                              }
                              className="w-24 rounded-md border border-slate-300 px-2 py-2 outline-none focus:border-green-600"
                            />
                          </td>
                        ))}
                        <td className="p-3 font-semibold">
                          {number(item.qty * item.watts, 0)} W
                        </td>
                        <td className="p-3 font-semibold">
                          {number(item.qty * item.watts * item.hours, 0)} Wh
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <ResultCard label="Total running load" value={`${number(loadTotals.runningWatts, 0)} W`} />
                <ResultCard label="Daily energy requirement" value={`${number(loadTotals.dailyWh / 1000, 2)} kWh`} />
                <ResultCard label="Monthly energy requirement" value={`${number((loadTotals.dailyWh * 30) / 1000, 1)} kWh`} />
              </div>
            </Section>

            <Section
              title="2. Solar, Inverter & Battery Sizing"
              description="Preliminary system sizing. Confirm all equipment limits against manufacturer datasheets."
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <SelectField
                  label="Battery bank voltage"
                  value={batteryVoltage}
                  onChange={setBatteryVoltage}
                  options={[
                    { label: '12V system', value: 12 },
                    { label: '24V system', value: 24 },
                    { label: '48V system', value: 48 },
                  ]}
                />
                <Field label="Backup autonomy" value={autonomy} onChange={setAutonomy} suffix="days" step="0.5" />
                <Field label="Usable battery DoD" value={dod} onChange={setDod} suffix="%" />
                <Field label="Inverter efficiency" value={inverterEfficiency} onChange={setInverterEfficiency} suffix="%" />
                <Field label="Peak sun hours" value={sunHours} onChange={setSunHours} suffix="hours/day" step="0.1" />
                <Field label="Solar system derating" value={efficiency} onChange={setEfficiency} suffix="%" />
                <Field label="PV design margin" value={pvMargin} onChange={setPvMargin} suffix="x" step="0.05" />
                <Field label="Inverter sizing margin" value={inverterMargin} onChange={setInverterMargin} suffix="x" step="0.05" />
                <Field label="Battery capacity margin" value={batteryMargin} onChange={setBatteryMargin} suffix="x" step="0.05" />
                <Field label="Panel wattage" value={panelWatts} onChange={setPanelWatts} suffix="Wp" />
                <Field label="Battery unit voltage" value={batteryUnitVoltage} onChange={setBatteryUnitVoltage} suffix="V" step="0.1" />
                <Field label="Battery unit capacity" value={batteryUnitAh} onChange={setBatteryUnitAh} suffix="Ah" />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <ResultCard label="Recommended inverter size" value={`${number(sizing.inverterW, 0)} W`} />
                <ResultCard label="Estimated battery capacity" value={`${number(sizing.batteryAh, 1)} Ah`} detail={`${number(sizing.batteryWh / 1000, 2)} kWh nominal`} />
                <ResultCard label="Required PV array" value={`${number(sizing.pvKwp, 2)} kWp`} />
                <ResultCard label="Suggested panel count" value={`${sizing.panelCount} panels`} detail={`${number(sizing.actualPvKwp, 2)} kWp actual`} />
                <ResultCard label="Battery unit quantity" value={`${sizing.batteryCount} units`} detail={`${sizing.seriesCount} series × ${sizing.parallelCount} parallel`} />
                <ResultCard label="Estimated MPPT output current" value={`${number(sizing.mpptCurrent, 1)} A`} />
              </div>

              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900">
                <strong>Design warning:</strong> These are preliminary estimates.
                Verify battery nominal voltage compatibility, inverter surge capacity,
                PV string Voc/Isc, MPPT input voltage/current, cable sizing, fuses,
                breakers, earthing and battery BMS limits with a qualified installer.
                The suggested battery series/parallel count is an estimate, not a
                compatibility approval.
              </div>

              <button
                type="button"
                onClick={useAdvancedPvForRoi}
                className="mt-4 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
              >
                Use calculated PV capacity in ROI
              </button>
            </Section>

            <Section
              title="3. Bangladesh Equipment Price Database"
              description="Editable budget estimates in BDT. Replace these with supplier quotations before preparing a customer quote."
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ['panel', 'Solar panel price / unit'],
                  ['battery', 'Battery price / unit'],
                  ['inverter', 'Hybrid inverter'],
                  ['mppt', 'MPPT controller'],
                  ['dcProtection', 'DC protection equipment'],
                  ['acProtection', 'AC protection equipment'],
                  ['cables', 'Cables & connectors'],
                  ['mounting', 'Mounting structure'],
                  ['earthing', 'Earthing & surge protection'],
                  ['labour', 'Installation labour'],
                  ['transport', 'Transport & miscellaneous'],
                ].map(([key, label]) => (
                  <Field
                    key={key}
                    label={label}
                    value={prices[key]}
                    onChange={(value) => updatePrice(key, value)}
                    suffix="BDT"
                  />
                ))}
                <Field
                  label="Other additional project costs"
                  value={customCost}
                  onChange={setCustomCost}
                  suffix="BDT"
                />
              </div>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[550px] text-sm">
                  <thead className="bg-slate-100 text-left text-xs uppercase text-slate-600">
                    <tr>
                      <th className="p-3">Equipment</th>
                      <th className="p-3">Quantity</th>
                      <th className="p-3">Unit price</th>
                      <th className="p-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipmentCost.items.map((item) => (
                      <tr key={item.label} className="border-b border-slate-100">
                        <td className="p-3">{item.label}</td>
                        <td className="p-3">{item.qty}</td>
                        <td className="p-3">{money(item.price)}</td>
                        <td className="p-3 font-semibold">{money(item.total)}</td>
                      </tr>
                    ))}
                    <tr className="bg-green-50 font-bold">
                      <td className="p-3" colSpan={3}>Estimated total project cost</td>
                      <td className="p-3 text-green-800">{money(equipmentCost.total)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                The equipment catalog contains editable planning prices, not verified
                live stock or guaranteed market quotations. Battery chemistry and
                inverter topology can change the actual equipment selection.
              </p>
            </Section>
          </div>
        )}

        {/* Shared lifetime / replacement assumptions */}
        <div className="mt-6">
          <Section
            title="Lifetime, Maintenance & Replacement"
            description="These expenses affect the real payback period and lifetime profit."
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Field label="Annual maintenance cost" value={maintenance} onChange={setMaintenance} suffix="BDT/year" />
              <Field label="Inverter replacement cost" value={inverterReplacement} onChange={setInverterReplacement} suffix="BDT" />
              <Field label="Inverter replacement year (0 = none)" value={inverterYear} onChange={setInverterYear} suffix="year" />
              <Field label="Battery replacement cost per event" value={batteryReplacement} onChange={setBatteryReplacement} suffix="BDT" />
              <Field label="Battery replacement interval (0 = none)" value={batteryInterval} onChange={setBatteryInterval} suffix="years" />
              <Field label="Analysis lifespan" value={lifespan} onChange={setLifespan} suffix="years" />
            </div>
          </Section>
        </div>

        {/* ROI output */}
        <div className="mt-6 space-y-6">
          <Section
            title="Solar Generation & Investment Return"
            description="Your estimated energy production and financial performance."
          >
            <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ResultCard
                label="Daily generation"
                value={`${number(mode === 'advanced' ? sizing.actualPvKwp * sunHours * efficiency / 100 : roi.dailyGeneration, 2)} kWh`}
              />
              <ResultCard
                label="Monthly generation"
                value={`${number((mode === 'advanced' ? sizing.actualPvKwp * sunHours * efficiency / 100 : roi.dailyGeneration) * 30, 1)} units`}
              />
              <ResultCard
                label="Year-1 generation"
                value={`${number((mode === 'advanced' ? sizing.actualPvKwp * sunHours * efficiency / 100 : roi.dailyGeneration) * 365, 0)} units`}
              />
              <ResultCard
                label="Investment used"
                value={money(investmentField)}
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ResultCard
                label="Lifetime gross savings / credit"
                value={money(roi.totalSavings)}
              />
              <ResultCard
                label="Maintenance & replacement"
                value={money(roi.totalCosts)}
              />
              <ResultCard
                label="Lifetime net profit"
                value={money(roi.netProfit)}
                highlight={roi.netProfit >= 0}
              />
              <ResultCard
                label="Lifetime ROI"
                value={`${number(roi.roiPercent, 1)}%`}
                highlight={roi.roiPercent >= 0}
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ResultCard
                label="Estimated payback period"
                value={roi.paybackYear ? `Year ${roi.paybackYear}` : 'Not recovered'}
                detail="First year when modeled cumulative cashflow reaches zero or above."
                highlight={Boolean(roi.paybackYear)}
              />
              <ResultCard
                label="Year-1 estimated bill savings"
                value={money(roi.yearlyRows[0]?.savings || 0)}
                detail="Based on self-consumed solar electricity."
              />
            </div>
          </Section>

          <Section
            title="Lifetime Cashflow"
            description="See how savings, replacement expenses and investment recovery change year by year."
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-500">
                Cumulative cashflow starts at negative initial investment.
              </p>
              <button
                type="button"
                onClick={downloadCsv}
                className="rounded-lg border border-green-700 px-4 py-2 text-sm font-semibold text-green-800 hover:bg-green-50"
              >
                Export Cashflow CSV
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase text-slate-600">
                  <tr>
                    <th className="p-3">Year</th>
                    <th className="p-3">Generation</th>
                    <th className="p-3">Self-used</th>
                    <th className="p-3">Bill savings</th>
                    <th className="p-3">Maintenance</th>
                    <th className="p-3">Replacement</th>
                    <th className="p-3">Net benefit</th>
                    <th className="p-3">Cumulative</th>
                  </tr>
                </thead>
                <tbody>
                  {roi.yearlyRows.map((row) => (
                    <tr key={row.year} className="border-b border-slate-100">
                      <td className="p-3 font-semibold">{row.year}</td>
                      <td className="p-3">{number(row.generation, 0)} kWh</td>
                      <td className="p-3">{number(row.selfConsumed, 0)} kWh</td>
                      <td className="p-3">{money(row.savings + row.exportRevenue)}</td>
                      <td className="p-3">{money(row.maintenanceCost)}</td>
                      <td className="p-3">{money(row.inverterCost + row.batteryCost)}</td>
                      <td className="p-3">{money(row.netBenefit)}</td>
                      <td className={`p-3 font-bold ${row.cumulative >= 0 ? 'text-green-700' : 'text-red-600'}`}>
                        {money(row.cumulative)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>

        {/* Explanation and safety */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="font-bold text-blue-900">Calculation formulas</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-blue-900">
              <li>Daily generation = kWp × sun hours × system efficiency</li>
              <li>Bill savings = self-used kWh × avoided grid tariff</li>
              <li>Net profit = lifetime savings − maintenance − replacements − investment</li>
              <li>ROI = net profit ÷ initial investment × 100</li>
              <li>Payback = first year cumulative cashflow becomes positive</li>
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="font-bold text-amber-900">Important limitations</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-900">
              <li>Solar production changes with weather, shading, orientation and season.</li>
              <li>Fixed electricity bill charges may not disappear when using solar.</li>
              <li>Exported power is not automatically paid at the retail tariff.</li>
              <li>Battery and inverter replacement timing depends on usage and warranty.</li>
              <li>Get a qualified installer to approve the electrical design and protection.</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Solar Calculator · PC Club BD · Planning estimates only · Verify current
          Bangladesh electricity tariffs and supplier quotations before investment.
        </p>
      </div>
    </div>
  );
}
