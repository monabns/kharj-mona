
// updated to show monthly details for each installment
// ... (previous imports remain unchanged)

// inside return() > TabsContent value="summary" (we'll add a section to show installments breakdown)
<TabsContent value="summary">
  <Card className="mb-4">
    <CardContent className="text-right">
      <Label className="block mb-2">درآمد ماهانه:</Label>
      <Input type="number" value={income} onChange={(e) => setIncome(parseInt(e.target.value))} className="mb-4" />
      <p>خرج ثابت: {totalExpenses.toLocaleString()} تومان</p>
      <p>اقساط: {totalInstallments.toLocaleString()} تومان</p>
      <p className="font-bold">پس‌انداز: {savings.toLocaleString()} تومان</p>
      <Button className="mt-4" onClick={exportExpenses}>📤 خروجی CSV از خرج‌ها</Button>
      <ul className="mt-6 text-right">
        {expenses.map((e, i) => (
          <li key={i} className="border rounded p-2 my-2 flex justify-between items-center bg-white">
            <div>
              <strong>{e.title}</strong> - {e.amount.toLocaleString()} تومان<br />
              <small>دسته: {e.category} | لیبل‌ها: {e.labels?.join("، ")}</small>
            </div>
            <Button variant="destructive" onClick={() => handleDeleteExpense(i)}>🗑 حذف</Button>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">اقساط ماهانه:</h2>
        <ul className="text-sm">
          {installments.map((i, idx) => (
            <li key={idx} className="mb-2 bg-purple-50 p-2 rounded">
              <strong>{i.title}</strong>: {i.monthlyAmount.toLocaleString()} تومان در ماه ({i.monthsRemaining} ماه باقی‌مانده)
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
</TabsContent>
