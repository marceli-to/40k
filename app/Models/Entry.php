<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use App\Models\Base;

class Apartment extends Base
{
  
  protected $casts = [
    'date' => 'date:d.m.Y',
  ];

  protected $fillable = [
    'amount',
    'date',
  ];

  /**
   * Accessor for available_at
   * @param Date $value
   */

  public function setDateAttribute($value)
  {
    $this->attributes['date'] = $value ? date('Y-m-d', strtotime($value)) : NULL;
  }

}
